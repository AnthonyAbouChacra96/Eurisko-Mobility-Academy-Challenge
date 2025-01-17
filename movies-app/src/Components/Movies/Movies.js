import { React, useState, useEffect } from "react";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Classes from "./Movies.module.css";
import Movie from "./Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
//import axios from '../../axios/MovieAxios';
import { connect } from "react-redux";
import * as MovieAction from "../../Action/Action";
import MovieDetails from './MovieDetails/MovieDetails';
import PropTypes from 'prop-types';
import { propTypes } from "react-bootstrap/esm/Image";
const Movies = (props) => {
  const [state, setstate] = useState({
    show: false,
    spinn: false,
    error: false,
  });
  useEffect(() => {
    // 		setstate({ ...state, spinn: true });

    // axios.get("discover/tv/", {
    //     params: {
    //       with_genres: props.genreId,
    //     },
    //   })
    //   .then((response) => {
    // 		// console.log(response.data);
    // 		setTimeout(() => {
    // 						setstate({ ...state, spinn: false });
    // 		},1000);

    //   })
    //   .catch((err) => {
    // 		console.log(err);
    // 		setstate({ ...state, spinn: false,error:true});
    //   });

    if (props.categories[props.genreCaption].movies === null) {
      props.onFetchAllMovies(props.genreId, props.genreCaption);
    }
    // console.log("props from useffect maovies", props);
  }, []);

  const ModalCloseHandler = () => {
    console.log("modaleclose");
    setstate({
      ...state,
      show: false,
    });
  };
  const ModalOpenHandler = (id) => {
    //	alert(id);
      setstate({
        ...state,
        show: true,
      });
      props.onFetchMovie(id);
    // console.log ('AFTER Click',props);
  };
  // console.log("props before render", props.categories[props.genreCaption]);
  let i = 0;
  let movieslist = props.categories[props.genreCaption].movies
    ? Object.keys(props.categories[props.genreCaption].movies).map((movie) => {
        i++;
        return (
          <Movie
            key={
              props.categories[props.genreCaption].movies[movie].id +
              props.caption +
              i
            }
            genreCaption={props.genreCaption}
            genreId={props.genreId}
            clicked={ModalOpenHandler}
            movieData={props.categories[props.genreCaption].movies[movie]}
          />
        );
      })
		: null;
		
		console.log("simngle movie", props.clickedMovie.movieData);
  let singleMovieData =
    props.clickedMovie.movieData !== null ? (
      <MovieDetails movieDetails={props.clickedMovie} />
    ) : null;

  return (
    <Aux>
      <div className={Classes.CathegoryCaption}>
        <h1>{props.caption}</h1>
      </div>

      {props.categories[props.genreCaption].error ? (
        <p>OOOOOps!!!{props.categories[props.genreCaption].error}</p>
      ) : props.categories[props.genreCaption].spinn ? (
        <Spinner />
      ) : (
        <Aux>
          <Modal show={state.show} modalClosed={ModalCloseHandler}>
            {singleMovieData}
          </Modal>
          <div className={Classes.container}>{movieslist}</div>
        </Aux>
      )}
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.movies.category,
    clickedMovie: state.movies.clicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAllMovies: (id, category) =>
      dispatch(MovieAction.fetchMovies(id, category)),
    onFetchMovie: (id) => dispatch(MovieAction.fetchMovie(id)),
  };
};
Movies.propTypes={
	caption:PropTypes.string,
	genreCaption:PropTypes.string.isRequired,
	genreId:PropTypes.number.isRequired 
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
