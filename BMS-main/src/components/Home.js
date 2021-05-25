import {
  //   Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardHeader,
} from "@material-ui/core";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="home-container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img class="card-img-top" src="" alt="" />

              <div class="card-body">
                <h5 class="card-title">Apply For Loan</h5>
                <p class="card-text">
                  Searching for Home or EducationLoan..... Couldn't find one...
                  No Worries...We Got You Covered!
                </p>

                <a href="/loan" class="btn btn-outline-primary btn-sm">
                  Apply for Loan
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img class="card-img-top" src="" alt="" />

              <div class="card-body">
                <h5 class="card-title">Update Your Details</h5>
                <p class="card-text">
                  Filled Something Wrong during Registration.
                  <p>Update Your Details Here</p>
                </p>

                <a href="#" class="btn btn-outline-primary btn-sm">
                  Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
