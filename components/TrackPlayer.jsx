import React, { useCallback, useContext, useRef, useEffect } from 'react';

import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRange,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';

import {
  arrowDown,
  heart,
  heartOutline,
  playSkipBack,
  play,
  pause,
  playSkipForward,
  removeCircleOutline,
} from 'ionicons/icons';

import {
  AppContext,
  isPlayerOpen,
  closePlayer,
  getPlaying,
  getCurrentTrack,
  isFavTrack,
  favTrack,
  pauseTrack,
  playTrack,
  seekTrack,
  nextTrack,
  prevTrack,
} from '../State';

import { img, msToTime } from '../util';

import './TrackPlayer.css';

const TrackProgress = ({ playing, track, onSeek }) => {
  const progress = playing.progress;
  const left = track.time - progress;
  const percent = (progress / track.time) * 100;

  const s = (p) => {
    const newTime = (p / 100) * track.time;
    onSeek(newTime);
  };
  return (
    <div className="track-progress">
      <IonRange
        value={percent}
        onIonChange={(e) => {
          s(e.target.value);
        }}
      />
      <div className="track-progress-time">
        <div className="track-progress-time-current">{msToTime(progress)}</div>
        <div className="track-progress-time-left">-{msToTime(left)}</div>
      </div>
    </div>
  );
};

const TrackControls = ({
  playing,
  isFav,
  onPause,
  onPlay,
  onPrev,
  onNext,
  onFav,
}) => {
  return (
    <div className="track-controls">
      <IonIcon onClick={onFav} icon={isFav ? heart : heartOutline} />
      <IonIcon onClick={onPrev} icon={playSkipBack} />
      {playing.paused ? (
        <IonIcon onClick={onPlay} className="play-pause" icon={play} />
      ) : (
        <IonIcon onClick={onPause} className="play-pause" icon={pause} />
      )}
      <IonIcon onClick={onNext} icon={playSkipForward} />
      <IonIcon icon={removeCircleOutline} />
    </div>
  );
};

const TrackPlayer = ({ track, closed }) => {
  const { state, dispatch } = useContext(AppContext);

  const [lyric_curr_index, set_lyric_curr_index] = React.useState(0);

  const setCurrentLyric = (tempTime) => {
    const currentTrack = getCurrentTrack(state);

    let index = 0;

    let lyric_time_arr = currentTrack.lyric.map((data) => {
      return data.seek_time;
    });

    if (lyric_time_arr.indexOf(tempTime) === -1) {
      index =
        [...lyric_time_arr, tempTime].sort((a, b) => a - b).indexOf(tempTime) -
        1;
    } else {
      index = lyric_time_arr.indexOf(tempTime);
    }
    set_lyric_curr_index(index);

    let el = document.getElementById('item' + index);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };

  const playing = getPlaying(state);

  if (!playing) {
    return null;
  }

  const open = isPlayerOpen(state);
  const currentTrack = getCurrentTrack(state);
  const isFav = isFavTrack(state, track);

  const handleClose = useCallback(() => {
    dispatch(closePlayer());
  }, [dispatch, closePlayer]);

  useEffect(() => {
    if (!state.ui.scrolling) {
      setCurrentLyric(state.playing.progress / 1000);
    }
  }, [state.playing]);

  return (
    <IonModal isOpen={open} onDidDismiss={handleClose} className="track-player">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" onClick={() => dispatch(closePlayer())}>
              <IonIcon icon={arrowDown} />
            </IonButton>
          </IonButtons>
          <IonTitle>{currentTrack.title}</IonTitle>
        </IonToolbar>

        {/* <TrackProgress
          playing={playing}
          track={currentTrack}
          onSeek={(n) => {
            state.playing.sliding = true;
            dispatch(seekTrack(n));
            state.playing.sliding = false;
          }}
        /> */}
        <TrackControls
          playing={playing}
          track={currentTrack}
          isFav={isFav}
          onPause={() => dispatch(pauseTrack())}
          onPlay={() => dispatch(playTrack())}
          onPrev={() => dispatch(prevTrack())}
          onNext={() => dispatch(nextTrack())}
          onFav={() => dispatch(favTrack(track))}
        />
      </IonHeader>
      <IonContent
        className="track-content"
        scrollEvents={true}
        onIonScroll={() => {
          state.ui.scrolling = true;
        }}
        onIonScrollEnd={() => {
          state.ui.scrolling = false;
        }}
      >
        <ion-list>
          <ion-list-header> {currentTrack.title} </ion-list-header>

          {currentTrack?.lyric?.map((obj, idx) => {
            return (
              <ion-item
                key={idx}
                id={'item' + idx}
                button
                onClick={() => {
                  state.playing.manulSeek = true;
                  dispatch(seekTrack(Math.floor(obj.seek_time * 1000)));
                }}
              >
                {/* <ion-avatar slot="start">
                  <img src={img(currentTrack.img)} />
                </ion-avatar> */}
                <ion-label style={{ whiteSpace: 'normal' }}>
                  {lyric_curr_index === idx ? (
                    <h2>{obj.sentence}</h2>
                  ) : (
                    <h3>{obj.sentence}</h3>
                  )}

                  <p>
                    {lyric_curr_index === idx
                      ? currentTrack.lyric_fa[idx].sentence
                      : ''}
                  </p>
                </ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </IonContent>
    </IonModal>
  );
};

export default TrackPlayer;
