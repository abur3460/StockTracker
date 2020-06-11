import React, { Component } from "react";
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
    $("#nav").slideToggle();
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
    $(".active").removeClass("load");
    $(".active").removeClass("slide");
    $(".active").addClass("slide-back");
    $(".modal-content").removeClass("animate__animated animate__fadeInDownBig");
    $(".modal-content").addClass("animate__animated animate__fadeOutDownBig");
    setTimeout(() => {
      this.setState({ login: true, signup: false });
      $(".modal-content").removeClass(
        "animate__animated animate__fadeOutDownBig"
      );
      $(".modal-content").addClass("animate__animated animate__fadeInDownBig");
    }, 500);
  };

  showSignUp = () => {
    $(".active").removeClass("load");
    $(".active").removeClass("slide-back");
    $(".active").addClass("slide");
    $(".modal-content").removeClass("animate__animated animate__fadeInDownBig");
    $(".modal-content").addClass("animate__animated animate__fadeOutDownBig");
    setTimeout(() => {
      this.setState({ login: false, signup: true });
      $(".modal-content").removeClass(
        "animate__animated animate__fadeOutDownBig"
      );
      $(".modal-content").addClass("animate__animated animate__fadeInDownBig");
    }, 500);
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
