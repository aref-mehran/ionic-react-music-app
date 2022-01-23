import React, { useCallback, useContext, useRef, useEffect } from "react";

import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRange,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";

import {
  arrowDown,
  heart,
  heartOutline,
  playSkipBack,
  play,
  pause,
  playSkipForward,
  removeCircleOutline
} from "ionicons/icons";

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
  prevTrack
} from "../State";

import { img, msToTime } from "../util";

import "./TrackPlayer.css";

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
  onFav
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

        <TrackProgress
          playing={playing}
          track={currentTrack}
          onSeek={(n) => {
            state.playing.sliding = true;
            dispatch(seekTrack(n));
            state.playing.sliding = false;
          }}
        />
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
      <IonContent className="track-content">
        <ion-list>
          <ion-list-header> {currentTrack.title} </ion-list-header>

          {currentTrack?.lyric?.map((obj) => {
            return (
              <ion-item>
                <ion-avatar slot="start">
                  <img src={img(currentTrack.img)} />
                </ion-avatar>
                <ion-label>
                  <h2>Finn</h2>
                  <h3>I'm a big deal</h3>
                  <p>{obj.sentence}</p>
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
