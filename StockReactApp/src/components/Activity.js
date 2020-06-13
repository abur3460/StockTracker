import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";

import { fetchActivity } from "../actions";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
// function sortAscending() {
//   const { index } = this.state;
//   index.sort((a, b) => a - b);
//   this.setState({ index });
// }

// function sortDescending() {
//   const { index } = this.state;
//   index.sort((a, b) => a - b).reverse();
//   this.setState({ index });
// }

const Activity = (props) => {
  return (
    <div className="main">
      <h1 className="m-title">Stock Market Tracker</h1>
      <p>Major index tracking with real-time prices, volumes, and more. </p>
      <span className="btn bouncy" id="button" onClick={props.fetchActivity}>
        Check Current Prices
      </span>
      <Loader />
      <div className="m-container">
        {/* <div className="filters">
          Filter:
          <a onClick={sortDescending()}>High to Low</a>
          <a onClick={sortAscending()}>Low to High</a>
        </div> */}
        <table id="table">
          <thead>
            <tr className="hdr">
              <td>Name</td>
              <td colSpan="2">Price</td>
            </tr>
          </thead>
          {props.activity.activity.map((stock, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <div className="text">
                    {stock.name} | {stock.symbol}
                  </div>
                </td>
                <td>
                  <div className="price">${formatter.format(stock.price)}</div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchActivity })(Activity);
