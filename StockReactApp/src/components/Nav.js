import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  slideNav = () => {
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      if ($(".menu").hasClass("collapsed")) {
        $("#nav").slideToggle();
      } else {
        $("#nav").slideToggle();
      }
    } else {
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="mobile-top-nav">
          <button
            className="mobile-nav"
            id="nav-menu"
            onClick={() => {
              this.slideNav();
            }}
          >
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </button>
        </div>
        <div id="glowbar-mobile"></div>
        <div className="menu collapsed" id="nav">
          <div className="img-wrapper">
            <div className="border-wrapper">
              <span></span>
            </div>
            <img src={require("../img/logo.png")} />
          </div>
          <div className="links">
            <div className="first">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                <p>Home</p>
              </Link>
              <div className="dropdown-wrapper">
                <FontAwesomeIcon icon={faChartLine} />
                <p>Trackers</p>
                <div className="dropdown hidden">
                  <Link to="/">{/* <FontAwesomeIcon icon={fa} /> */}</Link>
                  <Link to="/">{/* <FontAwesomeIcon icon={fa} /> */}</Link>
                </div>
              </div>
            </div>
            <div className="second" onClick={this.props.showModal}>
              <FontAwesomeIcon icon={faSignInAlt} />
              <p>Sign In</p>
            </div>
          </div>
          <div className="mobile-links">
            <div className="first">
              <Link to="/">
                <p>Home</p>
              </Link>
              <div className="dropdown-wrapper">
                <p>Trackers</p>
                <div className="dropdown hidden">
                  <Link to="/">{/* <FontAwesomeIcon icon={fa} /> */}</Link>
                  <Link to="/">{/* <FontAwesomeIcon icon={fa} /> */}</Link>
                </div>
              </div>
            </div>
            <div className="second" onClick={this.props.showModal}>
              <p>Sign In</p>
            </div>
          </div>
        </div>
        <div id="glowbar"></div>
      </div>
    );
  }
}

export default Nav;
