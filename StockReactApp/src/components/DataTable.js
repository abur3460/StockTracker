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
    download: false,
    print: false,
  };

  return (
    <div className="m-container">
      <MUIDataTable
        title={"Top Indexes"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default DataTable;
