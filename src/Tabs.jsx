import React, { useContext } from "react";

/* Theme variables */
import "./theme/variables.css";

import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  home,
  homeOutline,
  homeSharp,
  informationCircle,
  person,
  search
} from "ionicons/icons";

import { AppContextProvider, AppContext } from "./State";

import Music from "./pages/Home";
import Track from "./pages/Track";

import TabBarSticky from "./components/TabBarSticky";
import TrackPreview from "./components/TrackPreview";

const Tabs = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <TabBarSticky>
        <TrackPreview />
      </TabBarSticky>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/browse" component={Music} exact={true} />
          <Route path="/app/track/:trackId" component={Track} />
          <Route path="/app/search/track/:trackId" component={Track} />
          <Route
            path="/app/"
            render={() => <Redirect to="/app/browse" />}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="browse" href="/app/browse">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/app/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/app/account">
          <IonIcon icon={person} />
          <IonLabel>Your Library</IonLabel>
        </IonTabButton>
          <IonTabButton tab="readme" href="/app/readme">
          <IonIcon icon={informationCircle} />
          <IonLabel>README</IonLabel>
        </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default Tabs;
