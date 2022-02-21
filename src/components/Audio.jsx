import localforage from "localforage";
import React, { useContext, useEffect, useState } from "react";

import { AppContext, getPlaying, seekTrack, getCurrentTrack } from "../State";

// A really naive fake play routine
const HiddenAudio = (url) => {
  const { state, dispatch } = useContext(AppContext);
  const currentTrack = getCurrentTrack(state);

  const [audio] = useState(new Audio());

  async function downloadTOIndexedDb(url, title) {

    var currentBlob = await localforage.getItem(title);

    if (currentBlob) {
      return;
    }

    currentTrack.downloadProgress=10;


    const res = await fetch(url);
  
    var blob = await res.blob();
    // blob = new Blob([blob], { type: "audio/mp3" });
    const total = blob.size;


    await localforage.setItem(title, blob);
    playCurrentTrack();

    currentTrack.downloadProgress = 100;

  }

   async function playCurrentTrack(){

    var blob = await localforage.getItem(currentTrack.title);

    if (blob) {
    var urlCreator = window.URL || window.webkitURL;

    var fileUrl = urlCreator.createObjectURL(blob);

      audio.src = fileUrl;
      audio.play();

    } else {
      downloadTOIndexedDb(currentTrack.src, currentTrack.title);
    }


  }
  useEffect(() => {
    if(!state.playing.paused){
      playCurrentTrack();

    }
  }, [currentTrack.src]);

  useEffect(() => {
    audio.addEventListener("timeupdate", async (event) => {
      dispatch(seekTrack(Math.floor(audio.currentTime)));

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
      if(!audio.src){
        playCurrentTrack();
      }
      audio.play();
    }
    if (playing && playing.paused) {
      audio.pause();
    }
  }, [state.playing]);

  return null;
};

export default HiddenAudio;
