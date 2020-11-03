import React from "react";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Classes from "./Movies.module.css";
import Movie from "./Movie/Movie";
const Movies = (props) => {
  return (
    <Aux>
      <div className={Classes.CathegoryCaption}>
        <h1>{props.caption}</h1>
      </div>
      <div className={Classes.container}>
        <Movie />
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
  );
};
export default Movies;
