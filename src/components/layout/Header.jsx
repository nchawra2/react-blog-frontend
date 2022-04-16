import React, { useState } from "react";
import "./Header.css";
import { FaStream } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  let [state, setState] = useState(false);
  let navigate = useNavigate();

  let getLinks = () => {
    setState(!state);
  };

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo_part_one">The</div>
          <div className="logo_part_two">Siren</div>
        </div>
        <nav>
          <ul className="navigation">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/bollywood" className="nav-link">
                Bollywood
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/technology" className="nav-link">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/hollywood" className="nav-link">
                Hollywood
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/fitness" className="nav-link">
                Fitness
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/food" className="nav-link">
                Food
              </Link>
            </li>
          </ul>
        </nav>
        <div className="drop-down-icon">
          <FaStream size={20} onClick={getLinks} />
        </div>
      </header>
      {state ? (
        <div className="mobile-links">
          <Link to="/" className="links" onClick={getLinks}>
            Home
          </Link>
          <Link to="/category/bollywood" className="links" onClick={getLinks}>
            Bollywood
          </Link>
          <Link to="/category/technology" className="links" onClick={getLinks}>
            Tech
          </Link>
          <Link to="/category/hollywood" className="links" onClick={getLinks}>
            Hollywood
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
