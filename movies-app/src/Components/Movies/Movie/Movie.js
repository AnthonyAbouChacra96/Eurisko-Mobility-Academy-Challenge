import React from 'react';
import Classes from '../Movies.module.css'
import Aux from '../../../HOC/Auxiliary/Auxiliary'

const Movie=(props)=>{

	const state={
		show:false,	
	};
	return (
    <Aux>
      <div
        className={Classes.moviecard}
        onClick={() => props.clicked(props.movieData.id)}
      >
        <div
          className={[Classes.movieheader].join(" ")}
          style={{
            background:
              'url("https://image.tmdb.org/t/p/w220_and_h330_face' +
              props.movieData.poster_path +
              '")',
            backgroundSize: "cover",
            backgroundRepeat: " no-repeat",
          }}
        >
          {/* <div className={Classes.headerIconContainer}>
          <a href="#">
            <i
              className={[Classes.materialIcons, Classes.headerIcon].join(" ")}
            >
              
            </i>
          </a>
        </div> */}
        </div>
        <div className={Classes.movieContent}>
          <div className={Classes.movieContentHeader}>
            <a>
              <h3 className={Classes.movieTitle}>{props.movieData.name}</h3>
            </a>
            {/* <div className={Classes.imaxLogo}></div> */}
          </div>
          <div className={Classes.movieInfo}>
            <div className={Classes.infoSection}>
              <label>Date </label>
              <span>{props.movieData.first_air_date}</span>
            </div>
            <div className={Classes.infoSection}>
              <label>Votes AVG</label>
              <span>{props.movieData.vote_average}</span>
            </div>
            <div className={Classes.infoSection}>
              <label>Votes</label>
              <span>{props.movieData.vote_count}</span>
            </div>
            <div className={Classes.infoSection}>
              <table>
                <label>popularity</label>
                <span>{props.movieData.popularity}</span>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
}
export default Movie ;