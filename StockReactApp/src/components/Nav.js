import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Landing from "./Landing";

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
          <div className="first">
            <Link to="/">Home</Link>
            <a className="dropdown">
              <span>Trackers</span>
              {/* <ul className="dropdown-menu">
                <li>
                  <span>Stock Market</span>
                </li>
                <li>
                  <span>Crypto Currency</span>
                </li>
              </ul> */}
            </a>
          </div>
          <div className="second" onClick={this.props.showModal}>
            <a>Log In</a>
          </div>
        </div>
        <div id="glowbar"></div>
      </div>
    );
  }
}

export default Nav;
