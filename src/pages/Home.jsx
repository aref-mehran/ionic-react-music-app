import React, { useState, useCallback, useContext, useRef, useEffect } from "react";
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
  CreateAnimation,
} from "@ionic/react";

import localforage from "localforage";


import { AppContext, playTrack,openPlayer } from "../State";

import { img } from "../util";

import "./Home.css";



const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  const [ forceUpdate,set_forceUpdate ] = useState(true);
  

  const animation = useRef(null);

  const doPlay = useCallback((track) => {
    dispatch(openPlayer());
    dispatch(playTrack(track));
  });

  useEffect( ()=>{

    (async ()=>{
      console.log(state.music.tracks);
      for ( var track of state.music.tracks){
        var currentBlob = await localforage.getItem(track.title);
        if(currentBlob){
          track.downloadProgress=100;
        }
    
      }
      state.loading=false;
      set_forceUpdate(!forceUpdate);

    })();
    
    

  },[])
  if (state.loading){
    return <div> {forceUpdate} </div>;
  }

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
          {state.music.tracks.map((track,idx) => (
            <div key={track.title}>
              <IonItem  onClick={() => doPlay(track)} button>
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

              <ion-progress-bar value="state.music.tracks[idx].downloadProgress"></ion-progress-bar>



            </div>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
