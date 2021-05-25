import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser } from "../../actions/action";
import {
  // Paper,
  // Grid,
  // TextField,
  // Button,
  // FormControlLabel,
  // Checkbox,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { history } from "../../index";

import "./Login.css";

// import { Face, Fingerprint } from "@material-ui/icons";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
    };
  }

  componentDidMount() {
    this.props.onLoginClick(this.state);
  }

  handleChangeLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmitLogin = (e) => {
  //   e.preventDefault();
  //   if((this.state.name == "admin" && this.state.pwd == "admin" )|| (this.state.name == "admin1" && this.state.pwd == "admin1" )){

  //   }
  // };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    if (
      (this.state.name === "admin" && this.state.pwd === "admin") ||
      (this.state.name === "admin1" && this.state.pwd === "admin1")
    ) {
      history.push("/home");
    } else {
      history.push("/");
    }
  };

  render() {
    const x = Object.values(this.state);
    const y = this.props;
    console.log(y);
    return (
      <div className="login-container">
        <Container maxWidth="sm">
          <form
            className="login"
            // action="/register"
            // method="post"
            onSubmit={this.handleSubmitLogin.bind(this)}
          >
            <h1>Login Here</h1>
            <br></br>
            <div className="form-group">
              Username:
              <input
                type="text"
                id="username"
                placeholder="UserName"
                name="name"
                className="form-control"
                onChange={this.handleChangeLogin.bind(this)}
                required
              />
              {/* <div className="text-danger">{this.state.errors.uname}</div> */}
              <br />
            </div>
            <div className="form-group">
              Password:
              <input
                type="password"
                id="Password"
                placeholder="Password"
                name="pwd"
                className="form-control"
                onChange={this.handleChangeLogin.bind(this)}
                required
              />
              {/* <div className="text-danger">{this.state.errors.pwd}</div> */}
              <br />
            </div>

            <button
              type="submit"
              className="submit_btn"
              // onClick={this.handleSubmitLogin}
            >
              Login
            </button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (cred) => {
      dispatch(checkUser(cred));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);
