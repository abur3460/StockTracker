import React, { Component } from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      isLoggedIn: true,
      currentUser: "",
      table: false,
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  showTable = () => {
    $(".loader-wrapper").css("display", "block");
    $(".loader-wrapper").addClass("animate__animated animate__fadeIn");
    setTimeout(() => {
      $(".loader-wrapper").addClass("animate__animated animate__fadeOut");
      setTimeout(() => {
        $(".m-container").addClass("animate__animated animate__fadeIn");
        $("body").css("overflow-y", "auto");
      }, 200);
    }, 3000);
    return this.setState({ table: true });
  };

  render() {
    const { user } = this.props.auth;
    return (
      <main>
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          onLogoutClick={this.onLogoutClick}
        />
        <Home showTable={this.showTable} table={this.state.table} />
      </main>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
