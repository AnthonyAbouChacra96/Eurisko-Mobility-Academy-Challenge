import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
const Navitem = (props) => (
  <li className="nav-item">
    <NavLink className="nav-link" to={props.destination} exact={props.exact}>
      {props.caption}
    </NavLink>
  </li>
);

Navitem.propTypes={
	exact:PropTypes.bool,
	caption:PropTypes.string,
	destination:PropTypes.string
}

export default Navitem;