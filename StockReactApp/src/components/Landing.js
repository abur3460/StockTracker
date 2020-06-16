import React, { Component } from "react";
import $ from "jquery";
import Home from "./Home";
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
      table: false,
    };
  }
  showTable = () => {
    this.setState({ table: true });
    setTimeout(() => {
      $("#loading").addClass("animate__animated animate__fadeIn");
      setTimeout(() => {
        $("#loading").addClass("animate__animated animate__fadeOut");
        setTimeout(() => {
          $("#table").addClass("animate__animated animate__fadeIn");
        }, 200);
      }, 3000);
    }, 300);
  };

  showModal = async () => {
    await this.setState({ show: true });
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      $("#nav").slideToggle();
    }
    $("#signup-content").css("opacity", "1");
    $("#login-content").css("opacity", "1");
    $(".modal")
      .addClass("animate__animated animate__fadeIn")
      .css("display", "block");
    $(".modal-content")
      .addClass("animate__animated animate__fadeIn")
      .css("opacity", "1");
  };

  hideModal = () => {
    if (this.state.signup == true) {
      $("#login-content").css("display", "none");
      $(".modal-content").addClass("animate__animated animate__fadeOut");
      setTimeout(() => {
        this.setState({ show: false, login: true, signup: false });
      }, 400);
    } else {
      $("#signup-content").css("display", "none");
      $(".modal-content").addClass("animate__animated animate__fadeOut");
      setTimeout(() => {
        this.setState({ show: false, login: true, signup: false });
      }, 400);
    }
  };

  showLogin = () => {
    $(".active").removeClass("slide");
    $(".active").addClass("slide-back");
    $("#signup-content").css("opacity", "0");
    $("#login-content").css("display", "auto");
    $("#login-content").css("opacity", "1");
    this.setState({ login: true, signup: false });
  };

  showSignUp = () => {
    $("#signup-content").css("opacity", "1");
    $("#login-content").css("opacity", "0");
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
        {isLoggedIn ? (
          <Widgets />
        ) : (
          <Home showTable={this.showTable} table={this.state.table} />
        )}
      </main>
    );
  }
}

export default Landing;
