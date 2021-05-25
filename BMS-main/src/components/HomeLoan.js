import React, { Component } from "react";

import "./HomeLoan.css";

class HomeLoan extends Component {
  render() {
    return (
      <div className="HomeLoan-container">
        <hr></hr>
        <div className="form-group">
          Annual Income:
          <input
            type="text"
            id="income"
            placeholder="Ex: 1000000"
            name="income"
            className="form-control"
            onChange={this.props.handleChangeLoan}
            required
          />
          {/* <div className="text-danger">{this.state.errors.email}</div> */}
          <br />
        </div>
        <div className="form-group">
          Current Company Name:
          <input
            type="text"
            id="companyName"
            placeholder="Ex. XYZ"
            name="comapnyName"
            className="form-control"
            onChange={this.props.handleChangeLoan}
            required
          />
          {/* <div className="text-danger">{this.state.errors.email}</div> */}
          <br />
        </div>
        <div className="form-group">
          Designation:
          <input
            type="text"
            id="designation"
            placeholder="Ex. S/w Engineer"
            name="designation"
            className="form-control"
            onChange={this.props.handleChangeLoan}
            required
          />
          {/* <div className="text-danger">{this.state.errors.email}</div> */}
          <br />
        </div>
        <div className="form-group">
          Total Experience:
          <input
            type="number"
            id="experience"
            name="experience"
            className="form-control"
            onChange={this.props.handleChangeLoan}
            required
          />
          {/* <div className="text-danger">{this.state.errors.email}</div> */}
          <br />
        </div>
        <div className="form-group">
          Total Experience with Current Company:
          <input
            type="number"
            id="experience2"
            name="experience2"
            className="form-control"
            onChange={this.props.handleChangeLoan}
            required
          />
          {/* <div className="text-danger">{this.state.errors.email}</div> */}
          <br />
        </div>
      </div>
    );
  }
}

export default HomeLoan;
