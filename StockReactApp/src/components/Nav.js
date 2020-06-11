import React, { Component } from "react";
import $ from "jquery";

class Nav extends Component {
  constructor(props) {
    super(props);
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
            <a>Home</a>
            <a>History</a>
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
