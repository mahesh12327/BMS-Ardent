import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

class Nav extends Component {
  componentWillMount() {
    this.props.notifyPathName(window.location.pathname);
  }

  render() {
    return (
      <div className="register">
        <div className="register-text">
          {this.props.pathname === "/" ? (
            <Link to="/register">Go To Register</Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
