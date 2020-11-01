import React from 'react';
import Navitem from './Navitem/Navitem';
const Navitems = () => (
  <ul className="navbar-nav">
    <Navitem destination="/action" caption="Action"/>
    <Navitem destination="/comedy" caption="Comedy" />
    <Navitem destination="/crime" caption="Crime" />
  </ul>
);
export default Navitems;