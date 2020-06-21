import React from "react";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import Loader from "./Loader";
import { fetchActivity } from "../actions/authActions";

const Home = (props) => {
  console.log(props);
  function handleClick(e) {
    e.preventDefault();
    const showtable = props.showTable();
    const activity = props.fetchActivity();
    return activity, showtable;
  }
  return (
    <div className="main">
      <div className="img-wrapper">
        <div className="border-wrapper">
          <span></span>
        </div>
        <img alt="logo" src={require("../img/logo.png")} />
      </div>
      <h1 className="m-title">Trend</h1>
      <div className="text-wrapper">
        <p>Major index tracking with real-time prices, volumes, and more. </p>
      </div>
      <span className="btn" id="button" onClick={handleClick}>
        Check Current Prices
      </span>
      <Loader />
      {props.table ? <DataTable activity={props.activity} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchActivity })(Home);
