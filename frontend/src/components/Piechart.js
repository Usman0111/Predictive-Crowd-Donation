import React, { useState } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const Piechart = (props) => {
  const { labels, vdata } = props.getData();
  const state = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        backgroundColor: ["#ffadad", "#a0c4ff", "#bdb2ff", "#CAFFBF"],
        hoverBackgroundColor: ["#FF8585", "#70A7FF", "#9985FF", "#99FF85"],
        data: vdata,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: props.title,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

      {/* <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rain fall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      /> */}
    </div>
  );
};

export default Piechart;
