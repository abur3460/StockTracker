import React, { useEffect } from "react";
import { connect } from "react-redux";

import MUIDataTable from "mui-datatables";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DataTable = (props) => {
  var index = [];
  index = props.activity.activity.indexes;

  for (var i = 0; i < index.length; i++) {
    for (var key in index[i]) {
      if (index[i].hasOwnProperty(key)) {
        if (key !== "name" && key !== "price") {
          delete index[i][key];
        }
      }
    }
  }

  const data = index;
  console.log(index);
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const options = {
    filterType: "checkbox",
  };

  return (
    <div className="m-container">
      <MUIDataTable
        title={"Top Indexes"}
        data={data}
        columns={columns}
        options={options}
      />
      {/* <table className="pagination" id="table">
        <thead>
          <tr className="hdr">
            <td>Name</td>
            <td colSpan="2">Price</td>
          </tr>
        </thead>
        {props.activity.activity.activity.map((stock, index) => (
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
      </table> */}
    </div>
  );
};

export default DataTable;
