import React, { useState, useCallback, useContext, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonThumbnail,
  CreateAnimation
} from "@ionic/react";

import localforage from "localforage";

import { AppContext, playTrack } from "../State";

import { img } from "../util";

import "./Home.css";

async function downloadTOIndexedDb(url, title) {
  // var res = await fetch(url);
  // var reader = res.body.getReader();
  // var data = await reader.read();
  // console.log(data);
  // var blob = new Blob([data.value], { type: "audio/mp3" });
  // localforage.setItem(title, blob);

  const res = await fetch(url);

  const reader = res.body.getReader();
  let bytesReceived = 0;
  var result;
  while (true) {
    result = await reader.read();
    if (result.done) {
      console.log("Fetch complete");
      break;
    }
    bytesReceived += result.value.length;
    console.log("Received", bytesReceived / 50000, "bytes of data so far");
  }

  var blob = await res.blob();
  // blob = new Blob([blob], { type: "audio/mp3" });
  const total = blob.size;



  localforage.setItem(title, blob);
}

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  const animation = useRef(null);

  const doPlay = useCallback((track) => {
    dispatch(playTrack(track));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>آهنگ ها</IonLabel>
          </IonListHeader>
          {state.music.tracks.map((track) => (
            <div>
              <IonItem key={track.title} onClick={() => doPlay(track)} button>
                <IonThumbnail slot="start">
                  <img src={img(track.img)} />
                </IonThumbnail>

                <CreateAnimation
                  ref={animation}
                  duration={1500}
                  iterations={Infinity}
                  fromTo={[
                    {
                      property: "transform",
                      fromValue: "translateX(0px)",
                      toValue: "translateX(100px)"
                    },
                    { property: "opacity", fromValue: "1", toValue: "0.2" }
                  ]}
                ></CreateAnimation>

                <h2
                  style={
                    state.playing.index == track.id
                      ? {
                          color: "green",
                          fontWeight: "bold"
                        }
                      : {}
                  }
                >
                  {track.title}
                </h2>
              </IonItem>
              <div onClick={() => downloadTOIndexedDb(track.src, track.title)}>
                click
              </div>
            </div>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
