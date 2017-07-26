import React from "react";
import { Link } from 'react-router-dom';

const Intro = (props) => {
  return (
    <div className="intro">
      <h1 className="welcomeHeader">Welcome to GitStreak</h1>
      <p>Get weekly updates and statistics on your git repos</p>
      <a href="#" className="comingSoon">More coming soon!</a>
    </div>
  );
}

export default Intro;
