import React from "react";
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export default function Header(props) {       //function Header({title})
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}                             {/* {title} */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* props.searchbar ? True=showSearchbar : False=dontshowSearchbar) */}
            {props.searchbar ? <form className="d-flex" role="search">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                Search
                </button>
            </form> : ""}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
    title: "Your Title here",
    searchbar: true
}

// Suppose you use the Header component like this:
// <Header title="My Custom Title" />

// In this case, the title prop is explicitly set to "My Custom Title", so the default value is overridden.

// However, if you use it without specifying the title prop:
// <Header />

// The default value "Your Title here" will be used for the title.

Header.propTypes = { 
    title: PropTypes.string,
    searchbar: PropTypes.bool.isRequired
}

// Header.propTypes is an object that specifies the expected types for the title prop of a component called Header.
// It indicates that the title prop should be of type string.
