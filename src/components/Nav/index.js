import React from "react";
import { Link } from "react-router-dom"



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light grey darken-4">
      <Link className="navbar-brand text-white center-align" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item btn m-2 orange accent-3">
          Search
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              
            </Link>
          </li>
          <li className="nav-item btn m-2 deep orange accent-3">
          Saved
            <Link
              to="/Saved"
              className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
            >
               
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;