import { React, useState, useEffect } from "react";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Classes from "./Movies.module.css";
import Movie from "./Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
//import axios from '../../axios/MovieAxios';
import { connect } from "react-redux";
import * as MovieAction from "../../Action/Action";
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

	 props.onFetchAllMovies(props.genreId, props.genreCaption);
	 console.log('props from useffect maovies',props);
  }, []);

  const ModalCloseHandler = () => {
    console.log("modaleclose");
    setstate({
      ...state,
      show: false,
    });
  };
  const ModalOpenHandler = () => {
    setstate({
      ...state,
      show: true,
    });
  };
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
          <Modal show={state.show} modalClosed={ModalCloseHandler} />
          <div className={Classes.container}>
            <Movie clicked={ModalOpenHandler} />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </div>
        </Aux>
      )}
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    categories:state.movies.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAllMovies: (id, category) =>
      dispatch(MovieAction.fetchMovies(id, category)),
    onFetchMovie: (id) => dispatch(MovieAction.fetchMovie(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
