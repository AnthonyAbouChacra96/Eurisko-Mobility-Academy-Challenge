import React from 'react';
import Classes from './PlayButton.module.css'
import {NavLink} from 'react-router-dom'

const PlayButton = (props) => (
  <a href={props.path} target='_blank' className={Classes.round_button}>
    <i className="fa fa-play fa-2x"></i>
  </a>
);
export default PlayButton;