import React from 'react';
import axios from 'axios';
import MainCard from "./MainCard";
import { Link, Redirect } from 'react-router-dom';
class Login extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: '',
      setData: '',
    }
  };
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  };

  onSubmit(e) {
    e.preventDefault();

    const user1 = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(user1);
// http://localhost:8000/users/login
    // axios.post('https://mastermind-backend.herokuapp.com/users/login  ', user1)
    //   .then(res => {

    //     if (res.data == 'successfully login') {
    //       this.props.history.push("/main");
    //     }
    //     else {
    //       console.log("no hurry");
    //     }
    //     this.setState({
    //       setData: res.data,
    //     });
    //   });
    this.props.history.push("/main");
  };
  promt = () => {
    this.setState({
      setData: "",
    })
  };

  render() {
    return (
      <div className="container choice">
        <div class="row mt-5">
          <div class="col-12 col-md-7 col-lg-5 m-auto">
            <div class="card card-body">
              <h1 class="text-center mb-3 log-h">
                <i class="fas fa-sign-in-alt"></i>  Login</h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group textbox-log">
                  <h3 className="promt">{this.state.setData}</h3>


                  <input type="email"
                    required
                    className="form-control"
                    placeholder="Username"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="textbox-log">

                  <input type="password"
                    required
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="form-group btn1">
                  <input type="submit"
                    value="login"
                    className="btn btn-primary" />
                </div>
              </form>
              <p className="lead mt-4"><p className="log-l">No Account?</p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Login;