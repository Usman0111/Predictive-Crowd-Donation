import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Donut = (props) => {
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
      <Doughnut
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
    </div>
  );
};

export default Donut;
