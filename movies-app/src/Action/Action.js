import * as actionTypes from "./ActionType";
import axios from "../axios/MovieAxios";

export const startfetchingMovies = (genreTitle) => {
  return {
    type: actionTypes.START_FETCH_MOVIES,
    genre: genreTitle,
  };
};

export const successFetchingMovies = (genreTitle, movies) => {
  // console.log("[actions/movies]", "success", genreTitle, movies);
  return {
    type: actionTypes.SUCCESS_FETCH_MOVIES,
    genre: genreTitle,
    movies: { ...movies },
  };
};

export const failFetchingMovies = (genreTitle, error) => {
  return {
    type: actionTypes.FAIL_FETCH_MOVIES,
    genre: genreTitle,
    error: error,
  };
};

export const fetchMovies = (genreId, genreTitle) => {
  return (dispatch) => {
    dispatch(startfetchingMovies(genreTitle));
    axios
      .get("discover/tv", {
        params: {
          with_genres: genreId,
        },
      })
      .then((response) => {
         console.log('from action ',response.data);
      setTimeout(() => {
				dispatch(successFetchingMovies(genreTitle, response.data));
			}, 1000);  
      })
      .catch((error) => {
        console.log(error);
        dispatch(failFetchingMovies(genreTitle, error));
      });
  };
};

export const startFetchingMovie = (movieId) => {
  return {
    type: actionTypes.START_FETCH_MOVIE,
    movieId: movieId,
  };
};

export const successFetchingMovie = (movieId, movieData) => {
  return {
    type: actionTypes.SUCCESS_FETCH_MOVIE,
    movieId: movieId,
    movieData: movieData,
  };
};

export const failFetchingMovie = (movieId, error) => {
  return {
    type: actionTypes.FAIL_FETCH_MOVIE,
    movieId: movieId,
    error: error,
  };
};

export const fetchMovie = (movieId) => {
  return (dispatch) => {
    dispatch(startFetchingMovie(movieId));
    axios
      .get(`tv/${movieId}`, {
        language: "en-US",
      })
      .then((response) => {
        console.log(response.data);
        dispatch(successFetchingMovie(movieId, response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failFetchingMovie(movieId, error));
      });
  };
};
