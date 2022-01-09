import React from "react";
import { Line } from "react-chartjs-2";

// element
const LineChart = ({ chartData, color, chartType }) => {
  let yAxisGridShow = "";
  if (chartType === "simple") {
    yAxisGridShow = false;
  } else {
    yAxisGridShow = true;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: yAxisGridShow,
        grid: {
          color: "#2c303c",
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return "$" + value.toFixed(2);
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.25,
        borderShadowColor: "#fff",
        borderShadowBlur: 5,
        borderShadowOffsetX: 0,
        borderShadowOffsetY: 4,
      },
      point: {
        radius: 0,
      },
    },
    tooltips: {
      mode: "y",
      intersect: false,
      callbacks: {},
    },
    hover: {
      intersect: false,
    },
  };

  return (
    <div className="linegraph">
      <Line
        data={{
          labels: chartData.map((item) => item.x),
          datasets: [
            {
              label: "Price",
              data: chartData.map((item) => item.y),
              backgroundColor: color,
              borderColor: color,
              borderWidth: 2,
              pointHoverBorderColor: "#000000",
              pointHoverBorderWidth: 1,
              pointHoverRadius: 6,
              pointHitRadius: 20,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};
export default LineChart;
