import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Register extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: "",
            password: '',
            cPassword: '',
            setData: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
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
    }
    onChangeCPassword(e) {
        this.setState({
            cPassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            cPassword: this.state.cPassword,
        }

        console.log(user);
        axios.post('https://mastermind-backend.herokuapp.com/users/register', user)
            .then(res => {
                this.setState({
                    setData: res.data,
                });
            });
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
                            <h1 class="text-center reg-h">
                                <i class="fas fa-user-plus"></i> Register</h1>

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group textbox-log">
                                    <h3 className="promt">{this.state.setData}</h3>
                                    <input type="text"
                                        required
                                        placeholder="Username"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername} />
                                </div>

                                <div className="textbox-log">

                                    <input type="email"
                                        required
                                        className="form-control"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                                <div className="textbox-log">

                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>

                                <div className="textbox-log">

                                    <input type="password"
                                        required
                                        className="form-control"
                                        placeholder="Confirm passowrd"
                                        value={this.state.cPassword}
                                        onChange={this.onChangeCPassword}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit"
                                        value="Create User"
                                        className="btn btn-primary" />
                                </div>
                            </form>
                            <p class="lead mt-4 reg-l">Have An Account? <Link className="reg-l2" to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;