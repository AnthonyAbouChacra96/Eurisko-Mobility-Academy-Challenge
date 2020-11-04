import React from 'react';
import Classes from '../Movies.module.css'
import Aux from '../../../HOC/Auxiliary/Auxiliary'

const Movie=(props)=>{

	const state={
		show:false,	
	};
	return (
    <Aux>
      <div className={Classes.moviecard} onClick={props.clicked}>
        <div
          className={[Classes.movieheader].join(" ")}
          style={{
            background:
              'url("https://image.tmdb.org/t/p/w220_and_h330_face/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg")',
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
            <a href="#">
              <h3 className={Classes.movieTitle}>hawaiiii death blala</h3>
            </a>
            {/* <div className={Classes.imaxLogo}></div> */}
          </div>
          <div className={Classes.movieInfo}>
            <div className={Classes.infoSection}>
              <label>Date & Time</label>
              <span>Sun 8 Sept - 10:00PM</span>
            </div>
            <div className={Classes.infoSection}>
              <label>Screen</label>
              <span>03</span>
            </div>
            <div className={Classes.infoSection}>
              <label>Row</label>
              <span>F</span>
            </div>
            <div className={Classes.infoSection}>
              <label>Seat</label>
              <span>21,22</span>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
}
export default Movie ;