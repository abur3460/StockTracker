import React from "react";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import { fetchActivity } from "../actions";

const Home = (props) => {
  console.log(props);
  return (
    <div className="main">
      <h1 className="m-title">Stock Market Tracker</h1>
      <p>Major index tracking with real-time prices, volumes, and more. </p>
      <span
        className="btn"
        id="button"
        onClick={(props.fetchActivity, props.showTable)}
      >
        Check Current Prices
      </span>
      {props.table ? <DataTable /> : null}
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
