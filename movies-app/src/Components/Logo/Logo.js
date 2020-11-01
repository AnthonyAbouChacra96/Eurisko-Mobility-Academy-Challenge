import React from 'react';
import Classes from './Logo.module.css';
import MovieLogo from '../../Assets/Images/movie-logo.jpg';
const Logo = (props) => (
  <div  className={Classes.Logo}>
    <img style={{height:'100%'}} src={MovieLogo} alt="" />
  </div>
);
export default Logo;