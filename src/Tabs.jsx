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
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  home,
  homeOutline,
  homeSharp,
  informationCircle,
  person,
  search,
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
      <Music></Music>
    </>
  );
};

export default Tabs;
