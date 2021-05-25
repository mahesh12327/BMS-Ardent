import React, { Component } from "react";
import axios from "axios";
import { history } from "../index";

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    var someDate = new Date();
    someDate.setDate(someDate.getDate());
    var date = someDate.toISOString().substr(0, 10);
    this.state = {
      name: "",
      uname: "",
      pwd: "",
      guardianType: "",
      guardianName: "",
      address: "",
      citizenship: "",
      state: "",
      country: "",
      email: "",
      gender: "",
      maritalStatus: "",
      contactNo: "",
      dob: "",
      registrationDate: date,
      accType: "",
      branchName: "",
      citizenStatus: "Minor",
      depositAmount: {
        saving: "",
        salary: "",
      },
      proofType: "",
      documentNo: "",
      holderName: "",
      holderAccountNumber: "",
      holderAccountNumber: "",
      errors: {},
    };
  }

  validate = (e) => {
    if (e.target.name === "name") {
      var regex = /^[a-zA-Z ]*$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "Name Cannot be Blank",
            },
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: "Please Enter Valid Name with letters and spaces",
          },
        });
        return false;
      }
    }
    if (
      e.target.name === "uname" ||
      e.target.name === "pwd" ||
      e.target.name === "guardianType" ||
      e.target.name === "guardianName" ||
      e.target.name === "address" ||
      e.target.name === "citizenship" ||
      e.target.name === "state" ||
      e.target.name === "country" ||
      e.target.name === "dob"
    ) {
      if (e.target.value === "") {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: `${e.target.id} Cannot be Blank`,
          },
        });
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: "",
          },
        });
        return true;
      }
    }

    if (e.target.name === "email") {
      var regex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "Email Cannot be Blank",
            },
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: "Please Enter Valid Email",
          },
        });
        return false;
      }
    }

    if (e.target.name === "documentNo") {
      var regex = /^[A-Z0-9]{12}$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "PAN Number Cannot be Blank",
            },
          });
          return false;
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: "Please Enter Valid Pan Number",
          },
        });
        return false;
      }
    }
    if (e.target.name === "contactNo") {
      var regex = /^[0-9]{10}$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "Contact Number Cannot be Blank",
            },
          });
          return false;
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: "Please Enter Valid Contact Number with 10 digits",
          },
        });
        return false;
      }
    }
  };

  onChangeDob(e) {
    this.setState({
      dob: e.target.value,
    });

    const age_years = this.calculateAge(e.target.value);

    if (age_years >= 18 && age_years <= 96) {
      if (age_years < 60) {
        this.setState({
          citizenStatus: "Major",
        });
      } else {
        this.setState({
          citizenStatus: "Senior",
        });
      }

      this.setState({
        errors: {
          ...this.state.errors,
          dob: "",
        },
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          dob: "Age should be between 18 and 96 years",
        },
      });
    }
  }

  calculateAge(d) {
    const dob = new Date(d);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    return age;
  }

  handleChange = (e) => {
    const isValid = this.validate(e);
    if (e.target.name === "dob") {
      this.onChangeDob(e);
    }
    if (isValid) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.target.name]: "",
      });
    }
  };

  handleChangeNested = (e) => {
    this.setState({
      [e.target.name]: {
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      userName: this.state.uname,
      password: this.state.pwd,
      guardianType: this.state.guardianType,
      guardianName: this.state.guardianName,
      address: this.state.address,
      citizenship: this.state.citizenship,
      state: this.state.state,
      country: this.state.country,
      email: this.state.email,
      gender: this.state.gender,
      martialStatus: this.state.maritialStatus,
      contactNo: this.state.contactNo,
      dob: this.state.dob,
      registrationDate: this.state.registrationDate,
      accType: this.state.accType,
      branchName: this.state.branchName,
      citizenStatus: this.state.citizenStatus,
      depositAmount: this.state.depositAmount,
      idProofType: this.state.proofType,
      proofType: this.state.documentNo,
      holderName: this.state.holderName,
      holderAccountNumber: this.state.holderAccountNumber,
      holderAccountNumber: this.state.holderAccountNumber,
    };
    axios.post("http://localhost:3006/details", this.state).then((response) => {
      console.log(response);
      history.push("/success");
    });
  };

  render() {
    const x = Object.values(this.state);
    console.log(x);
    var someDate = new Date();
    someDate.setDate(someDate.getDate());
    var date = someDate.toISOString().substr(0, 10);
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="row form">
            <div className="col-md-3">
              <div className="form-group">
                Name:
                <input
                  type="text"
                  id="name"
                  placeholder="Nick"
                  name="name"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.name}</div>
                <br />
              </div>
              <div className="form-group">
                Username:
                <input
                  type="text"
                  id="username"
                  placeholder="UserName"
                  name="uname"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.uname}</div>
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
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.pwd}</div>
                <br />
              </div>
              <div className="form-group">
                Guardian Type:
                <input
                  type="text"
                  id="guardianType"
                  placeholder="Guardian Type"
                  name="guardianType"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.guardianType}
                </div>
                <br />
              </div>
              <div className="form-group">
                Guardian Name:
                <input
                  type="text"
                  id="guardianName"
                  placeholder="Guardian Name"
                  name="guardianName"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.guardianName}
                </div>
                <br />
              </div>
              <div className="form-group">
                Address:
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  name="address"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.address}</div>
                <br />
              </div>
              <div className="form-group">
                Citizenship:
                <input
                  type="text"
                  id="citizenship"
                  placeholder="Citizenship"
                  name="citizenship"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.citizenship}
                </div>
                <br />
              </div>
              <div className="form-group">
                State:
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  name="state"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.state}</div>
                <br />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                Country:
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  name="country"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.country}</div>
                <br />
              </div>
              <div className="form-group">
                Email Address:
                <input
                  type="text"
                  id="emailAddress"
                  placeholder="abc@xyz.com"
                  name="email"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.email}</div>
                <br />
              </div>
              <div className="radio">
                Gender:
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="radio-btn-group radio-btn mb-5"
                  onChange={this.handleChange.bind(this)}
                  value="male"
                  required
                />
                Male
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="radio-btn-group"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                Female
                <div className="text-danger">{this.state.errors.gender}</div>
                <br />
              </div>
              <div className="form-group">
                Marital Status:
                <select
                  name="maritalStatus"
                  onChange={this.handleChange.bind(this)}
                  className="form-control"
                  required
                >
                  <option value="">Please Select from below</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
                <div className="text-danger">
                  {this.state.errors.maritalStatus}
                </div>
                <br />
              </div>
              <div className="form-group">
                Contact Number:
                <input
                  type="text"
                  id="contactNo"
                  placeholder="9876543210"
                  name="contactNo"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.contactNo}</div>
                <br />
              </div>
              <div className="form-group">
                Date of Birth:
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dob"
                  onChange={this.handleChange.bind(this)}
                  className="form-control"
                  required
                />
                <div className="text-danger">{this.state.errors.dob}</div>
                <br />
              </div>
              <div className="form-group">
                Registration Date:
                <input
                  type="date"
                  name="registrationDate"
                  className="form-control"
                  defaultValue={date}
                  disabled
                />
                <br />
                <div></div>
              </div>
              <div className="form-group">
                Account Type:
                <input
                  type="text"
                  id="accType"
                  placeholder="Account Type"
                  name="accType"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">{this.state.errors.accType}</div>
                <br />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                Branch Name:
                <input
                  type="text"
                  id="branchName"
                  placeholder="Branch Name"
                  name="branchName"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.branchName}
                </div>
                <br />
              </div>
              <div className="form-group">
                Citizen Status:
                <input
                  type="text"
                  name="citizenStatus"
                  className="form-control"
                  value={this.state.citizenStatus}
                  disabled
                  // onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.citizenStatus}
                </div>
                <br />
              </div>
              <div className="form-group">
                Initial Deposit Amount:
                <div className="radio-1">
                  <input
                    type="radio"
                    id="saving"
                    name="depositAmount"
                    onChange={this.handleChangeNested.bind(this)}
                    value="5000"
                    required
                  />
                  Savings
                  <input
                    type="radio"
                    id="salary"
                    name="depositAmount"
                    value="0"
                    onChange={this.handleChangeNested.bind(this)}
                  />
                  Salary
                  <div className="text-danger">
                    {this.state.errors.depositAmount}
                  </div>
                </div>
                <br />
              </div>
              <div className="form-group">
                Proof Type:
                <select
                  name="proofType"
                  onChange={this.handleChange.bind(this)}
                  className="form-control"
                  required
                >
                  <option value="">Please Select from below</option>
                  <option value="Aadhar">Aadhar Card</option>
                  <option value="Driving">Driving License</option>
                  <option value="Pan Card">Pan Card</option>
                </select>
                <div className="text-danger">{this.state.errors.proofType}</div>
                <br />
              </div>
              <div className="form-group">
                Document Number:
                <input
                  type="text"
                  id="document"
                  name="documentNo"
                  placeholder="R123456"
                  className=" form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.documentNo}
                </div>
                <br />
              </div>
              <div className="form-group">
                Account Holder Name:
                <input
                  type="text"
                  id="account"
                  name="holderName"
                  placeholder="ABC"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.holderName}
                </div>
                <br />
              </div>
              <div className="form-group">
                Account Number:
                <input
                  type="text"
                  id="accountNumber"
                  name="holderAccountNumber"
                  placeholder="Account Number"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.holderAccountNumber}
                </div>
                <br />
              </div>
              <div className="form-group">
                Holder Address:
                <input
                  type="text"
                  id="holderAddress"
                  name="holderAddress"
                  placeholder="Adderss"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <div className="text-danger">
                  {this.state.errors.holderAddress}
                </div>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 sub">
                <button type="submit" className="submit_btn">
                  Submit
                </button>
              </div>
              <div className="col-md-6">
                <button type="reset" className="submit_btn">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
