import React from "react";

/* Theme variables */
import "./theme/variables.css";

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, informationCircle, person, search } from "ionicons/icons";

import { AppContextProvider } from "./State";

import urls from "./urls";

import Tabs from "./Tabs";

import HiddenAudio from "./components/Audio";
import TrackPlayer from "./components/TrackPlayer";

const App = () => {
    // var root;
    // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //     root="/";
    // } else {
    //     // production build code
    // }
  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter >
          <IonPage>
            <IonRouterOutlet>
              <Route
                
                path="/"
                render={() => <Redirect to={urls.APP_HOME} />}
              />
            </IonRouterOutlet>
            <Route path="/" component={Tabs} />
            <HiddenAudio />
            <TrackPlayer />
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
