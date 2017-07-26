import React from "react";
import { Link } from 'react-router-dom';

const NavbarComp = (props) => {
  return (
    <nav className="topnav sticky">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/graphs">Graphs</Link></li>
        <li><Link to="/"><img src="../../images/Octocat.png"/></Link></li>
        <li><Link to="/repos">Repos</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default NavbarComp;
