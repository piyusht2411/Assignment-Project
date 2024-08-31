// src/components/MarketSharePieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { pieChartOptions } from "../utils/constant";
import { marketShareData } from "../utils/constant";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const MarketShareChart: React.FC = () => {
  const chartData = {
    labels: marketShareData.labels,
    datasets: [
      {
        label: "Market Share (%)",
        data: marketShareData.shares,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Pie data={chartData} options={pieChartOptions} />
    </div>
  );
};

export default MarketShareChart;
