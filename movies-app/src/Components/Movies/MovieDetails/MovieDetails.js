import React from 'react';
import Aux from '../../../HOC/Auxiliary/Auxiliary';
import Spinner from '../../UI/Spinner/Spinner';
import PlayButton from '../../UI/PlayButton/PlayButton';
 import './MovieDetails.css';
const MovieDetails=(props)=>{
console.log('PROPS FROM DETAILS',props)

let genres = Object.keys(Array([...props.movieDetails.movieData.genres])).map(genre=>{
return genre.name;
});
console.log('GENRES',genres);
	return (
    <Aux>
      {" "}
      {props.error ? (
        <p>OOOOOps!!!{props.error}</p>
      ) : props.spinn ? (
        <Spinner />
      ) : (
        <Aux>
          {/* <div style={{width:'500px',height:'300px'}}>some data</div> */}
          <div
            className="containerxx"
            style={{
              background:
                'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/w500' +
                props.movieDetails.movieData.backdrop_path +
                '")',
              backgroundSize: "cover",
              backgroundRepeat: " no-repeat",
            }}
          >
            <div
              className="poster"
              style={{
                background:
                  'url("https://image.tmdb.org/t/p/w220_and_h330_face' +
                  props.movieDetails.movieData.poster_path +
                  '")',
                backgroundSize: "cover",
                backgroundRepeat: " no-repeat",
              }}
            >
              <PlayButton
                path={props.movieDetails.movieData.homepage}
                className="playbtn"
              />
            </div>
            <div className="details">
              <div className="title">
                <h1>{props.movieDetails.movieData.name}</h1>
              </div>
              <div className="info">
                <div>
                  <label>Genres &nbsp;: &nbsp; </label>
                  <span>
                    {props.movieDetails.movieData.genres
                      .map((genre) => genre.name)
                      .join("|")}
                  </span>
                </div>
                <div>
                  <label>Number Of Episodes &nbsp;: &nbsp; </label>
                  <span>{props.movieDetails.movieData.number_of_episodes}</span>
                  &emsp;
                  <label>Number Of Seasons &nbsp;: &nbsp; </label>
                  <span>{props.movieDetails.movieData.number_of_seasons}</span>
                </div>
                <div>
                  <label>Last Air Date &nbsp;: &nbsp; </label>
                  <span>
                    {props.movieDetails.movieData.last_air_date}
                  </span>
                </div>
              </div>
              <div className="overview">
                <p>{props.movieDetails.movieData.overview}</p>
              </div>
            </div>
          </div>
          {/* <div className="movie_card" id="bright">
            <div className="info_section">
              <div className="movie_header">
                <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
                <h1>Bright</h1>
                <h4>2017, David Ayer</h4>
                <span className="minutes">117 min</span>
                <p className="type">Action, Crime, Fantasy</p>
              </div>
              <div className="movie_desc">
                <p className="text">
                  Set in a world where fantasy creatures live side by side with
                  humans. A human cop is forced to work with an Orc to find a
                  weapon everyone is prepared to kill for.
                </p>
              </div>
              <div className="movie_social">
                <ul>
                  <li>
                    <i className="material-icons">share</i>
                  </li>
                  <li>
                    <i className="material-icons"></i>
                  </li>
                  <li>
                    <i className="material-icons">chat_bubble</i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blur_back bright_back"></div>
          </div> */}
        </Aux>
      )}
    </Aux>
  );

};

export default MovieDetails;