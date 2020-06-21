import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../actions/authActions";
import classnames from "classnames";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";
var i = 0;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s_email: "",
      s_password: "",
      s_password2: "",
      fname: "",
      l_email: "",
      l_password: "",
      errors: {},
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps, props) {
    if (prevProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (props.errors !== prevProps.errors) {
      this.setState({
        errors: prevProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.l_email,
      password: this.state.l_password,
    };
    console.log("user:", userData);
    this.props.loginUser(userData);
  };

  onSubmit_newUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.fname,
      email: this.state.s_email,
      password: this.state.s_password,
      password2: this.state.s_password2,
    };
    console.log("new user:", newUser);

    this.props.registerUser(newUser, this.props.history);
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
                    <label> Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="l_email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />

                    <label> Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <input
                      type="text"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="l_password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />

                    <button className="submitBtn" type="submit">
                      Login <FontAwesomeIcon icon={faSignInAlt} />
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
                    <label>Full name</label>
                    <span className="red-text">{errors.name}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.fname}
                      error={errors.name}
                      id="fname"
                      type="name"
                      className={classnames("", {
                        invalid: errors.name,
                      })}
                    />

                    <label> Email</label>
                    <span className="red-text">{errors.email}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.s_email}
                      error={errors.email}
                      id="s_email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email,
                      })}
                    />

                    <label> Password</label>
                    <span className="red-text">{errors.password}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.s_password}
                      error={errors.password}
                      id="s_password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password,
                      })}
                    />
                    <label> Confirm Password</label>
                    <span className="red-text">{errors.password2}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.s_password2}
                      error={errors.password2}
                      id="s_password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2,
                      })}
                    />
                    <button className="submitBtn" type="submit">
                      Sign Up <FontAwesomeIcon icon={faArrowCircleRight} />
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser, loginUser })(
  withRouter(Login)
);
