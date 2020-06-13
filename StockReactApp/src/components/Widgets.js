import React from "react";
import { connect } from "react-redux";

import { getUserData } from "../actions";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Widgets = (props) => {
  console.log(props);
  return (
    <div className="main">
      <h1 className="w-title">Welcome back, {this.props.currentUser} </h1>
      <div className="widget-wrapper">
        <div className="widget">Current Stats Widget</div>
        <div className="widget">Starred Stocks Widget</div>
      </div>
      <div className="widget-wrapper">
        <div className="widget">Top Gain Widget / Top Lost Widget</div>
        <div className="widget">Reccomended Stocks Widget</div>
      </div>
    </div>
  );
};
export default Widgets;
