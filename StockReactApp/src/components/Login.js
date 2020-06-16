import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
// import { Link } from "react-router-dom";
import $ from "jquery";
var i = 0;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s_email: "",
      s_password: "",
      fname: "",
      l_email: "",
      l_password: "",
      errors: {},
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("user:", userData);
  };

  onSubmit_newUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.fname,
      email: this.state.s_email,
      password: this.state.s_password,
      password2: this.state.password2,
    };
    console.log("new user:", newUser);
  };

  handleClick(int) {
    if (int === 2 && this.state.isFlipped == false) {
      i = 1;
      this.props.showSignUp();
      this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    } else if (this.state.isFlipped == true && int == 1) {
      this.props.showLogin();
      this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    } else {
    }
  }

  closeModal = () => {
    if (this.props.signup == true) {
      this.props.hideModal();

      setTimeout(() => {
        this.props.showLogin();
        this.setState({ isFlipped: false });
      }, 300);
    } else {
      this.props.hideModal();
      this.props.showLogin();
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <main>
        {this.props.show && (
          <div className="modal">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="horizontal"
            >
              <div className="modal-content" id="login-content">
                <span className="close" onClick={this.closeModal}>
                  &times;
                </span>
                <div className="hdr-text">
                  <div className="form-switch">
                    <span
                      className="login"
                      onClick={() => {
                        this.handleClick(1);
                      }}
                    >
                      Login
                    </span>
                    <span
                      className="signup"
                      onClick={() => {
                        this.handleClick(2);
                      }}
                    >
                      Sign Up
                    </span>
                    <span className="active load"> </span>
                  </div>
                </div>
                <div className="loginform">
                  <h2>Login</h2>
                  <form
                    id="login-form"
                    encType="multipart/form-data"
                    noValidate
                    onSubmit={this.onSubmit}
                  >
                    <label> Email:</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="l_email"
                      type="email"
                    />

                    <label> Password:</label>
                    <input
                      type="text"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="l_password"
                      type="password"
                    />

                    <button className="submitBtn" type="submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal-content" id="signup-content">
                <span className="close" onClick={this.closeModal}>
                  &times;
                </span>
                <div className="hdr-text">
                  <div className="form-switch">
                    <span
                      className="login"
                      onClick={() => {
                        this.handleClick(1);
                      }}
                    >
                      Login
                    </span>
                    <span
                      className="signup"
                      onClick={() => {
                        this.handleClick(2);
                      }}
                    >
                      Sign Up
                    </span>
                    <span className="active load"> </span>
                  </div>
                </div>
                <div className="signupform">
                  <h2>Sign Up</h2>
                  <form
                    id="signup-form"
                    noValidate
                    onSubmit={this.onSubmit_newUser}
                  >
                    <label>Full name:</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.fname}
                      error={errors.name}
                      id="fname"
                      type="name"
                    />

                    <label> Email:</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.s_email}
                      error={errors.email}
                      id="s_email"
                      type="email"
                    />

                    <label> Password:</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.s_password}
                      error={errors.password}
                      id="s_password"
                      type="password"
                    />
                    <button className="submitBtn" type="submit">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        )}
      </main>
    );
  }
}

export default Login;
