import React from "react";
import { Bar } from "react-chartjs-2";

const Bargraph = (props) => {
  const { labels, vdata } = props.getData();

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: vdata,
      },
    ],
  };

  return (
    <div className="ml-2">
      <Bar
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
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Bargraph;
