import React, { useContext, useEffect, useState } from 'react';

import { AppContext, getPlaying, seekTrack, getCurrentTrack } from '../State';

// A really naive fake play routine
const HiddenAudio = (url) => {
  const { state, dispatch } = useContext(AppContext);
  const currentTrack = getCurrentTrack(state);

  const [handle, setHandle] = useState(null);

  const [audio] = useState(new Audio(currentTrack.src));

  useEffect(() => {
    audio.addEventListener('timeupdate', async (event) => {
      const playing = getPlaying(state);
      // if (playing && !playing.paused && !state.playing.sliding) {
      if (playing && !playing.paused && !state.playing.manulSeek) {
        dispatch(seekTrack(Math.floor(audio.currentTime * 1000)));
      }
    });
  }, []);
  useEffect(() => {
    if (state.playing.manulSeek) {
      audio.currentTime = state.playing.progress;
      state.playing.manulSeek = false;
    }

    // audio.currentTime = state.playing.progress;
    const playing = getPlaying(state);
    if (playing && !playing.paused) {
      audio.play();
    }
    if (playing && playing.paused) {
      audio.pause();
    }
  }, [state.playing]);

  return null;
};

export default HiddenAudio;
