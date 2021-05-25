import React, { Component } from "react";
import { Link } from "react-router-dom";

class Success extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", alignSelf: "stretch" }}>
          Hurray!! Successfully Registered, Click here to
          <Link to="/" className="nav-link">
            Login
          </Link>
        </h3>
      </div>
    );
  }
}

export default Success;
