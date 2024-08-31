import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { weatherChartOptions } from "../utils/constant";
import { weatherData } from "../utils/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const WeatherChart: React.FC = () => {
  const chartData = {
    labels: weatherData.labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.temperatures,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Line data={chartData} options={weatherChartOptions} />
    </div>
  );
};

export default WeatherChart;
