import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartOptions } from "../utils/constant";
import { companyProfitData } from "../utils/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CompanyChart: React.FC = () => {
  const chartData = {
    labels: companyProfitData.labels,
    datasets: [
      {
        label: "Profit (USD)",
        data: companyProfitData.profits,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Bar data={chartData} options={barChartOptions} />
    </div>
  );
};

export default CompanyChart;
