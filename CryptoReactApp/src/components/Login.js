import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function validateLoginForm() {
  var b = !0;
  var g = $("#userName").val(),
    n = $("#userPwd").val();
  return (
    "" === g
      ? ($("#userName-info").html("Required."),
        $("#userName").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userName").css("border", "none"),
    "" === n
      ? ($("#userEmail-info").html("Required."),
        $("#userPwd").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userPwd").css("border", "none"),
    b
  );
}
function validateSignUpForm() {
  var b = !0;
  var g = $("#userName").val(),
    n = $("#userPwd").val();
  return (
    "" === g
      ? ($("#userName-info").html("Required."),
        $("#userName").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userName").css("border", "none"),
    "" === n
      ? ($("#userEmail-info").html("Required."),
        $("#userPwd").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userPwd").css("border", "none"),
    b
  );
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
                  <span className="active"> </span>
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
                        <label>Login</label>
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
                    <input type="text" id="userName" name="username" />
                    <label> Password:</label>
                    <input type="text" id="userpwd" name="password" />
                    <div className="submitBtn">
                      <a className="signup">
                        <label>Sign Up</label>
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
