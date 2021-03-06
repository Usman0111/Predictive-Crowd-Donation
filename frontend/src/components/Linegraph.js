import React from "react";
import { Line } from "react-chartjs-2";

const Linegraph = (props) => {
  const { labels, vdata } = props.getData();

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: vdata,
      },
    ],
  };

  return (
    <div>
      <Line
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

export default Linegraph;
