import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
import MUIDataTable from "mui-datatables";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DataTable = (props) => {
  console.log(props);
  return (
    <div className="m-container">
      <Loader />
      <table className="pagination" id="table">
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
  );
};

export default DataTable;
