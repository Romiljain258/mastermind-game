import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ChoiceCard extends Component {
  render() {
    return (
      <div className="container choice">
        <div class="row mt-5">
          <div class="col-12 col-md-7 col-lg-5 m-auto">
            <div class="card card-body text-center">
              <h1><i className="fas fa-gamepad size color1"></i></h1>
              <h1><b className="color2">MasterMind Game</b></h1>
              <h4 className="color3">Create an account or login</h4>
              <Link to="/register" class="btn btn-primary  mb-3 mt-2 reg">Register</Link>

              <Link to="/login" class="btn btn-danger log">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
