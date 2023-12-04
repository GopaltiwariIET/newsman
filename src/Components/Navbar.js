import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import countrycodes from "./CountryCodes";

const Navbar = (props) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [, setSelectedCountry] = useState(null);
  const suggestionsListRef = useRef(null);
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredSuggestions = countrycodes.filter((country) =>
      country.name.toLowerCase().includes(value)
    );
    setSearchValue(value);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (code) => {
    setSearchValue("");
    setSuggestions([]);
    setSelectedCountry(code);
    props.onCountryCodeChange(code);
  };

  const handleDocumentClick = (e) => {
    if (
      suggestionsListRef.current &&
      inputRef.current &&
      !suggestionsListRef.current.contains(e.target) &&
      e.target !== inputRef.current
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const position = {
    position: "absolute",
    top: "55px",
    right: "20px",
    height: "70vh",
    cursor: "pointer",
    border: "2px solid black",
    background: "white",
    color: "#6c7a89",
    fontSize: "1rem",
    padding: ".5em .75em",
    zIndex: "2",
    overflow: "auto",
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <img
          src={logo}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
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
            <ul className="list-group mx-4">
              <li
                className="list-group list-group-horizontal p-0"
                id="multiCollapse"
              >
                <Link
                    to="/"
                    className={`list-group-item list-group-item-action ${location.pathname === '/'? 'active':""}`}
                    aria-current="true"
                  >
                    General
                  </Link>
                  <Link
                    to="/health"
                    className={`list-group-item list-group-item-action ${location.pathname === '/health'? 'active':""}`}
                  >
                    Health
                  </Link>
                  <Link
                    to="/sports"
                    className={`list-group-item list-group-item-action ${location.pathname === '/sports'? 'active':""}`}
                  >
                    Sports
                  </Link>
                  <Link
                    to="/business"
                    className={`list-group-item list-group-item-action ${location.pathname === '/business'? 'active':""}`}
                  >
                    Business
                  </Link>
                  <Link
                    to="/entertainment"
                    className={`list-group-item list-group-item-action ${location.pathname === '/entertainment'? 'active':""}`}
                  >
                    Entertainment
                  </Link>
                  <Link
                    to="/technology"
                    className={`list-group-item list-group-item-action ${location.pathname === '/technology'? 'active':""}`}
                  >
                    Technology
                  </Link>
                  <Link
                    to="/science"
                    className={`list-group-item list-group-item-action ${location.pathname === '/science'? 'active':""}`}
                  >
                    Science
                  </Link>
              </li>
            </ul>
          </ul>
          <div className="d-flex">
            <input
              ref={inputRef}
              className="form-control me-2"
              name="country"
              value={searchValue}
              onChange={handleSearchChange}
              type="search"
              placeholder="Select your country"
              aria-label="Search"
            />
            {suggestions.length > 0 && (
              <ul
                ref={suggestionsListRef}
                className="suggestions-list"
                style={position}
              >
                {suggestions.map((country) => (
                  <li
                    key={country.code}
                    onClick={() => handleSuggestionClick(country.code)}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
