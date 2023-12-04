import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country_code: "in",
    };
  }
  handleCountryCodeChange = (code) => {
    if (code) {
      this.setState({ country_code: code });
    }
  };
  render() {
    return (
      <Router>
        <Navbar onCountryCodeChange={this.handleCountryCodeChange} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key={`${this.state.country_code || "general"}-${"general"}`}
                country={this.state.country_code}
                cat="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key={`${this.state.country_code || "health"}-${"health"}`}
                country={this.state.country_code}
                cat="health"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key={`${this.state.country_code || "sports"}-${"sports"}`}
                country={this.state.country_code}
                cat="sports"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key={`${this.state.country_code || "business"}-${"business"}`}
                country={this.state.country_code}
                cat="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key={`${
                  this.state.country_code || "entertainment"
                }-${"entertainment"}`}
                country={this.state.country_code}
                cat="entertainment"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key={`${
                  this.state.country_code || "technology"
                }-${"technology"}`}
                country={this.state.country_code}
                cat="technology"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key={`${this.state.country_code || "science"}-${"science"}`}
                country={this.state.country_code}
                cat="science"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
