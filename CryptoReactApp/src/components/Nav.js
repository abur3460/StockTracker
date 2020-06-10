import React, { Component } from "react";
import $ from "jquery";

$("#nav-menu").on("click", function (a) {
  if ($("#nav").is(":visible")) {
    $("#nav").slideToggle();
    $("#glowbar-mobile").animate({ opacity: 0 });
  } else {
    $("#glowbar-mobile").animate({ opacity: 1 });
    $("#nav").slideToggle();
  }
});

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="mobile-top-nav">
          <button className="mobile-nav" id="nav-menu">
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </button>
        </div>
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
