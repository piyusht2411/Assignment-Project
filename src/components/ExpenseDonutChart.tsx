import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { donutChartOptions } from "../utils/constant";
import { expenseData } from "../utils/constant";
import styles from "../styles/chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ExpenseDonutChart: React.FC = () => {
  const chartData = {
    labels: expenseData.labels,
    datasets: [
      {
        label: "Expenses (%)",
        data: expenseData.expenses,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartWrapper}>
      <h2>Company Profit</h2>
      <Doughnut data={chartData} options={donutChartOptions} />
    </div>
  );
};

export default ExpenseDonutChart;
