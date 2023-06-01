import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/040/784/non_2x/creative-p-letter-logo-with-blue-3d-bright-swashes-blue-swoosh-icon-vector.jpg"
                alt="poshB"
              />
            </Link>
          </div>
          <div className="menu-bar" onClick={handleClick}>
            <i className={click ? " time fas fa-times" : " time fas fa-bars"} />
          </div>
          <div className="links">
            <div className={click ? "nav-menu active" : "nav-menu "}>
              <Link to="/art" className="links" onClick={closeMobileMenu}>
                <h6>ART</h6>
              </Link>
              <Link
                to="/?cat=science"
                className="links"
                onClick={closeMobileMenu}
              >
                <h6>SCIENCE</h6>
              </Link>
              <Link
                to="/?cat=technology"
                className="links"
                onClick={closeMobileMenu}
              >
                <h6>TECHNOLOGY</h6>
              </Link>
              <Link
                to="/?cat=cinema"
                className="links"
                onClick={closeMobileMenu}
              >
                <h6>CINEMA</h6>
              </Link>
              <Link
                to="/?cat=design"
                className="links"
                onClick={closeMobileMenu}
              >
                <h6>DESIGN</h6>
              </Link>
              <Link to="/?cat=food" className="links" onClick={closeMobileMenu}>
                <h6>FOOD</h6>
              </Link>
              <span>fresh</span>
              <span>Logout</span>
              <span className="write">
                <Link to="/write" className="links" onClick={closeMobileMenu}>
                  Write
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
