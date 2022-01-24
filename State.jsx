import React from 'react';
import { lyric as count_on_me_lyric } from './assets/count_on_me.js';
import { lyric as count_on_me_lyric_fa } from './assets/count_on_me_fa.js';

/**
 * This is a simple redux-like state management pattern for React using hooks
 * that might be useful in your simpler Ionic React apps that don't
 * require something as complex as Redux.
 *
 * See each page for an example of how to read from state and
 * dispatch actions.
 *
 * Learn more:
 * https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/
 */

export const AppContext = React.createContext();

const reducer = (state, action) => {
  const playing = getPlaying(state);
  const ct = getCurrentTrack(state);
  const user = getUser(state);

  switch (action.type) {
    case 'SET_SCROLLING': {
      return {
        ...state,
        ui: {
          ...state.ui,
          scrolling: action.scrolling,
        },
      };
    }

    case 'SET_PLAYER_OPEN': {
      return {
        ...state,
        ui: {
          ...state.ui,
          playerOpen: action.open,
        },
      };
    }
    case 'PAUSE': {
      return {
        ...state,
        playing: {
          ...playing,
          paused: true,
        },
      };
    }
    case 'PLAY': {
      if (action.track && action.track !== ct) {
        const newRecentTracks = getRecentTracks(state).filter(
          (t) => t.id !== action.track.id
        );
        const index = getTrackIndex(state, action.track.id);
        return {
          ...state,
          ui: {
            playerOpen: true,
          },
          user: {
            ...user,
            recentTracks: [action.track, ...newRecentTracks],
          },
          playing: {
            ...playing,
            index,
            progress: 0,
            paused: false,
          },
        };
      }
      return {
        ...state,
        playing: {
          ...playing,
          paused: false,
        },
      };
    }
    case 'SEEK': {
      return {
        ...state,
        playing: {
          ...playing,
          progress: action.time <= ct.time ? Math.floor(action.time) : ct.time,
        },
      };
    }
    case 'NEXT': {
      return {
        ...state,
        playing: {
          index: (playing.index + 1) % getTracks(state).length,
          progress: 0,
        },
      };
    }
    case 'PREV': {
      return {
        ...state,
        playing: {
          index: Math.max(0, state.playing.index - 1),
          progress: 0,
        },
      };
    }
    case 'FAV': {
      const isFav = isFavTrack(state, action.track);
      const newFavs = getFavTracks(state).filter(
        (t) => t.id !== action.track.id
      );
      return {
        ...state,
        user: {
          ...user,
          favTracks: !isFav ? [ct, ...newFavs] : newFavs,
        },
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        playing: null,
        auth: {
          ...state.auth,
          user: null,
        },
      };
    }
    case 'LOGGED_IN':
      {
        return {
          ...state,
          auth: {
            ...state.auth,
            user: action.user,
          },
        };
      }

      return state;
  }
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log(
      '%cPrevious State:',
      'color: #9E9E9E; font-weight: 700;',
      state
    );
    console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
    console.log(
      '%cNext State:',
      'color: #47B04B; font-weight: 700;',
      reducer(state, action)
    );
    return reducer(state, action);
  };

  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

const get_lyric_arr = (lyric) => {
  let txt_content = lyric;
  let lyric_lines = txt_content.split('\n');

  let arr = [];
  for (let line of lyric_lines) {
    let sentence = line.split(']')[1];
    let time_str = line.split(']')[0].split('[')[1];
    let min = Number(time_str.split(':')[0]);
    let sec = Number(time_str.split(':')[1]);
    let seek_time = min * 60 + sec;
    arr.push({ seek_time: seek_time, sentence: sentence });
  }

  return arr;
};
const initialState = {
  playing: {
    index: 0,
    progress: 27000,
    paused: false,
    intervalId: null,
    sliding: false,
  },
  auth: {
    user: null,
  },
  user: {
    recentTracks: [],
    favTracks: [],
  },
  ui: {
    playerOpen: false,
    scrolling: false,
  },
  music: {
    tracks: [
      {
        id: '0',
        title: 'Count on you',
        artist: 'The Beatles',
        img: 'music/hey-jude.jpg',
        src: 'https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3',
        lyric: get_lyric_arr(count_on_me_lyric),
        lyric_fa: get_lyric_arr(count_on_me_lyric_fa),
        time: 411000,
      },
    ],
    hotTracks: ['0', '1', '2', '3'],
    newTracks: ['4', '5', '6', '7'],
  },
};

export function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = React.useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export const AppContextConsumer = AppContext.Consumer;

// Some state action creators

export const openPlayer = () => ({
  type: 'SET_SCROLLING',
  scrolling: true,
});

export const openPlayer = () => ({
  type: 'SET_PLAYER_OPEN',
  open: true,
});

export const closePlayer = () => ({
  type: 'SET_PLAYER_OPEN',
  open: false,
});

export const pauseTrack = () => ({
  type: 'PAUSE',
});

export const playTrack = (track) => ({
  type: 'PLAY',
  track,
});

export const seekTrack = (time) => ({
  type: 'SEEK',
  time,
});

export const nextTrack = () => ({
  type: 'NEXT',
});

export const prevTrack = () => ({
  type: 'PREV',
});

export const favTrack = (track) => ({
  type: 'FAV',
  track,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const loggedIn = (user) => ({
  type: 'LOGGED_IN',
  user,
});

// Some state selectors

export const isPlayerOpen = (state) => state.ui.playerOpen;

// Get all tracks in database

export const getTracks = (state) => state.music.tracks;
export const getNewTracks = (state) =>
  state.music.tracks.filter((t) =>
    state.music.newTracks.find((nt) => nt === t.id)
  );
export const getHotTracks = (state) =>
  state.music.tracks.filter((t) =>
    state.music.hotTracks.find((nt) => nt === t.id)
  );

export const getFavTracks = (state) => state.user.favTracks;
export const getRecentTracks = (state) => state.user.recentTracks;
export const isFavTrack = (state, track) =>
  !!state.user.favTracks.find((t) => t.id === track.id);

export const getPlaying = (state) => state.playing;

export const getCurrentTrack = (state, index) =>
  state.music.tracks[state.playing ? state.playing.index : -1];

export const getTrack = (state, id) =>
  state.music.tracks.find((t) => t.id === id);
export const getTrackIndex = (state, id) =>
  state.music.tracks.findIndex((t) => t.id === id);
export const getUser = (state) => state.user;
