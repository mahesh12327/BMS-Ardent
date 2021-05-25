import React, { Component } from "react";
import EducationLoan from "./EducationLoan";
import HomeLoan from "./HomeLoan";

import "./loan.css";

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: "",
      eduLoan: {
        courseFee: "",
        course: "",
        fatherName: "",
        fatherOccupation: "",
        expense: "",
        experience: "",
        comapnyName: "",
        rationNumber: "",
        income: "",
      },
      homeLoan: {
        income: "",
        companyName: "",
        designation: "",
        experience: "",
        experience2: "",
      },
    };
  }

  handleChangeParentLoan = (e) => {
    this.setState({
      loanType: e.target.value,
    });
  };

  handleChangeLoan = (e) => {
    this.setState({
      eduLoan: {
        ...this.state.eduLoan,
        [e.target.id]: e.target.value,
      },
    });
  };
  render() {
    const x = Object.values(this.state);
    console.log(x);
    return (
      <div className="loan-container">
        <div className="ui form">
          <div className="field">
            <label>Choose Type of Loan</label>
            <select
              name="loanType"
              className="form-control loan-options"
              onChange={this.handleChangeParentLoan.bind(this)}
            >
              <option value="">Select from here</option>
              <option value="education">Education Loan</option>
              <option value="p/h">Personal/Home Loan</option>
            </select>
          </div>
        </div>
        <div>
          {this.state.loanType === "education" ? (
            <EducationLoan handleChangeLoan={this.handleChangeLoan} />
          ) : (
            ""
          )}

          {this.state.loanType === "p/h" ? (
            <HomeLoan handleChangeLoan={this.handleChangeLoan} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Loan;
