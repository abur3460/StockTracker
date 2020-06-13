import React, { Component } from "react";
import $ from "jquery";
import Activity from "./Activity";
import Loader from "./Loader";
import Login from "./Login";
import Nav from "./Nav";
import Widgets from "./Widgets";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      login: true,
      signup: false,
      isLoggedIn: false,
      currentUser: "",
    };
  }

  showModal = () => {
    this.setState({ show: true });
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      $("#nav").slideToggle();
    }
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
    this.setState({ login: true, signup: false });
  };

  showSignUp = () => {
    $(".active").removeClass("load");
    $(".active").removeClass("slide-back");
    $(".active").addClass("slide");
    this.setState({ login: false, signup: true });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <main>
        <Login
          show={this.state.show}
          login={this.state.login}
          signup={this.state.signup}
          showLogin={this.showLogin}
          showSignUp={this.showSignUp}
          hideModal={this.hideModal}
        />
        <Nav showModal={this.showModal} currentUser={this.currentUser} />
        {isLoggedIn ? <Widgets /> : <Activity />}
      </main>
    );
  }
}

export default Landing;
