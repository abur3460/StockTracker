import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Activity from "./Activity";
import Loader from "./Loader";
import Login from "./Login";
import Nav from "./Nav";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, login: true, signup: false };
  }

  showModal = () => {
    this.setState({ show: true });
    $("#modal")
      .addClass("animate__animated animate__fadeIn")
      .css("display", "block");
    $(".modal-content")
      .addClass("animate__animated animate__fadeIn")
      .css("opacity", "1");
  };

  hideModal = () => {
    $(".modal-content").addClass("animate__animated animate__fadeOut");
    setTimeout(() => {
      this.setState({ show: false });
    }, 400);
  };

  showLogin = () => {
    $(".active").removeClass("slide");
    $(".active").addClass("slide-back");
    $(".signupform").addClass("animate__animated animate__zoomOut");
    setTimeout(() => {
      this.setState({ login: true, signup: false });
      $(".loginform").addClass("animate__animated animate__zoomIn");
    }, 400);
  };

  showSignUp = () => {
    $(".active").removeClass("slide-back");
    $(".active").addClass("slide");
    $(".loginform").addClass("animate__animated animate__zoomOut");
    setTimeout(() => {
      this.setState({ login: false, signup: true });
      $(".signupform")
        .addClass("animate__animated animate__zoomIn")
        .css("opacity", "1");
    }, 400);
  };

  render() {
    return (
      <div className="wrapper">
        <Login
          show={this.state.show}
          login={this.state.login}
          signup={this.state.signup}
          showLogin={this.showLogin}
          showSignUp={this.showSignUp}
          hideModal={this.hideModal}
        />
        <Nav showModal={this.showModal} />
        <Activity />
        <Loader />
      </div>
    );
  }
}

export default Landing;
