import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ currentUser }) => {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar">
          <Link to="announcements">
            <i className="fa-solid fa-store"></i> Announcements
          </Link>
          {!currentUser?.id ? <Link to="login">
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Link> : '' }
        </div>
          </header>
          <div className="header_placeholder"></div>
    </>
  );
};

export default Header;
