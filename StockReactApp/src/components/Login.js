import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function validateLoginForm() {
  var g = $("#username").val(),
    n = $("#userpwd").val();
  if (g == "") {
    $("#username-info").html("Required");
    $("#username").css("border", "#e66262 1px solid");
  } else {
    $("#username").css("border", "none");
  }
  if (n == "") {
    $("#userpwd-info").html("Required");
    $("#userpwd").css("border", "#e66262 1px solid");
  } else {
    $("#userpwd").css("border", "none");
  }
}
function validateSignUpForm() {
  var g = $("#username").val(),
    n = $("#userpwd").val();
  if (g == "") {
    $("#username-info").html("Required");
    $("#username").css("border", "#e66262 1px solid");
  } else {
    $("#username").css("border", "none");
  }
  if (n == "") {
    $("#userpwd-info").html("Required");
    $("#userpwd").css("border", "#e66262 1px solid");
  } else {
    $("#userpwd").css("border", "none");
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {this.props.show && (
          <div id="modal">
            <div className="modal-content">
              <span className="close" onClick={this.props.hideModal}>
                &times;
              </span>
              <div className="hdr-text">
                <div className="form-switch">
                  <span className="login" onClick={this.props.showLogin}>
                    Login
                  </span>
                  <span className="signup" onClick={this.props.showSignUp}>
                    Sign Up
                  </span>
                  <span className="active load"> </span>
                </div>
              </div>
              {this.props.login && (
                <div className="loginform">
                  <h2>Login</h2>
                  <form id="login-form" encType="multipart/form-data">
                    <label> Username:</label>
                    <input type="text" id="username" name="username" />
                    <label> Password:</label>
                    <input type="text" id="userpwd" name="password" />
                    <div className="submitBtn active">
                      <a>
                        <label
                          onClick={() => {
                            validateLoginForm();
                          }}
                        >
                          Login
                        </label>
                      </a>
                    </div>
                  </form>
                </div>
              )}
              {this.props.signup && (
                <div className="signupform">
                  <h2>Sign Up</h2>
                  <form id="signup-form" encType="multipart/form-data">
                    <label> Username:</label>
                    <input type="text" id="username" name="username" />
                    <label> Password:</label>
                    <input type="text" id="userpwd" name="password" />
                    <div className="submitBtn">
                      <a className="signup">
                        <label
                          onClick={() => {
                            validateSignUpForm();
                          }}
                        >
                          Sign Up
                        </label>
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Login;
