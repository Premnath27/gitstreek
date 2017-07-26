import React from "react";
import { Link } from 'react-router-dom';

const NavbarComp = (props) => {
  return (

    <nav className="topnav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/"><img src="../../images/Octocat.png" className="logo" /></Link></li>
        <li><a href="/auth/github">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavbarComp;
