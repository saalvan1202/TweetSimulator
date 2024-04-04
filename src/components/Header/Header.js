import React from "react";
import "./Header.scss";
import TwitterLogo from "../../assets/img/twitter-logo.png";
import NewLogo from "../../assets/img/images.png";
export default function Header() {
  return (
    <div className="header">
      <img src={NewLogo} alt="Twets-Simulator" />
      <h1>TWITTER</h1>
    </div>
  );
}

/*Sprin Boot*/
