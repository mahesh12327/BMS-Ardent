// import { Input, Grid } from "@material-ui/core";
import React, { Component } from "react";
// import { Form } from "react-bootstrap";

import "./EducationLoan.css";

class EducationLoan extends Component {
  render() {
    return (
      <div className="edu-container">
        <div className="row">
          <hr></hr>
          <div className="col-md-6">
            <div className="form-group">
              Course Fee:
              <input
                type="text"
                id="courseFee"
                placeholder="Amount"
                name="courseFee"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
            <div className="form-group">
              Course:
              <input
                type="text"
                id="course"
                placeholder="Ex. CS"
                name="course"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
            <div className="form-group">
              Father Name:
              <input
                type="text"
                id="fname"
                placeholder="Father Name"
                name="fatherName"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
            <div className="form-group">
              Father Occupation:
              <input
                type="text"
                id="fatherOcc"
                placeholder="Ex. Engineer"
                name="fatherOccupation"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
            <div className="form-group">
              Father's Total Expense:
              <input
                type="text"
                id="expense"
                placeholder="Amount"
                name="expense"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              Father's Experience:
              <input
                type="text"
                id="experience"
                placeholder="Ex. 1"
                name="experience"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
            <div className="form-group">
              Father's current Company Name:
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
              Ration Card Number:
              <input
                type="text"
                id="rNo"
                placeholder="12345678"
                name="rationNumber"
                className="form-control"
                onChange={this.props.handleChangeLoan}
                required
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
              <br />
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default EducationLoan;
