import * as actionTypes from "../Action/ActionType";

const initialState = {
  category: {
    action: {
      id: 28,
      caption: "Action",
      spinn: false,
      error: null,
      movies: null,
    },
    comedy: {
      id: 35,
      caption: "Comedy",
      spinn: false,
      error: null,
      movies: null,
    },
    crime: {
      id: 80,
      caption: "Crime",
      spinn: false,
      error: null,
      movies: null,
    },
  },
  clicked: {
    spin: null,
    error: null,
    id: null,
    movieData: null,
  },
};

const startfetchingMovies = (state, action) => {
  // let newState = { ...state[action.genre] };
  let newState = {
    category: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.category[action.genre].spinn = true;
  newState.category[action.genre].error = null;
  newState.category[action.genre].movies = null;

  // {
  //   genres: {
  //     action: {
  //       isLoading: true;
  //     }
  //   }
  // }

  // return updateObject(state, newState);
  return newState;
};

const successFetchingMovies = (state, action) => {
  let newState = {
    ...state,
    category: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.category[action.genre].spinn = false;
  newState.category[action.genre].error = null;
  newState.category[action.genre].movies = action.movies.results;

  return newState;
  // return updateObject(state, newState);
};

const failFetchingMovies = (state, action) => {
  let newState = {
    ...state,
    categorycategory: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.category[action.genre].spinn = false;
  newState.category[action.genre].error = action.error;
  newState.category[action.genre].movies = null;

  return newState;
  // return updateObject(state, newState);
};

const startFetchingMovie = (state, action) => {
  let newState = {
    ...state,
    category: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.clicked.id = action.movieId;
  newState.clicked.spinn = true;
  newState.clicked.error = null;
  newState.clicked.movieData = null;

  return newState;
};

const successFetchingMovie = (state, action) => {
  let newState = {
    ...state,
    category: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.clicked.id = action.movieId;
  newState.clicked.spinn = false;
  newState.clicked.error = null;
  newState.clicked.movieData = action.movieData;

  return newState;
};
const failFetchingMovie = (state, action) => {
  let newState = {
    ...state,
    category: {
      action: {
        ...state.category["action"],
      },
      comedy: {
        ...state.category["comedy"],
      },
      crime: {
        ...state.category["crime"],
      },
    },
    clicked: {
      ...state.clicked,
    },
  };

  newState.clicked.id = null;
  newState.clicked.spinn = false;
  newState.clicked.error = action.error;
  newState.clicked.movieData = null;

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_MOVIES:
      return startfetchingMovies(state, action);
    case actionTypes.SUCCESS_FETCH_MOVIES:
      return successFetchingMovies(state, action);
    case actionTypes.FAIL_FETCH_MOVIES:
      return failFetchingMovies(state, action);
    case actionTypes.START_FETCH_MOVIE:
      return startFetchingMovie(state, action);
    case actionTypes.SUCCESS_FETCH_MOVIE:
      return successFetchingMovie(state, action);
    case actionTypes.FAIL_FETCH_MOVIE:
      return failFetchingMovie(state, action);
    default:
      return state;
  }
};

export default reducer;
