import React, { useEffect, useState } from "react";
import WeatherChart from "@/components/WeatherChart";
import CompanyChart from "@/components/CompanyChart";
import MarketShareChart from "@/components/MarketShareChart";
import Table from "@/components/Table";
import styles from "../styles/home.module.css";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ExpenseDonutChart from "@/components/ExpenseDonutChart";

const Dashboard = () => {
  const [settings, setSettings] = useState({
    showWeatherChart: true,
    showCompanyChart: true,
    showMarketShareChart: true,
    showExpenseDonutChart: true,
    showTable: true,
  });
  const router = useRouter();

  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.chartWapper}>
        {settings.showWeatherChart && (
          <div className={styles.chart}>
            <WeatherChart />
          </div>
        )}
        {settings.showCompanyChart && (
          <div className={styles.chart}>
            <CompanyChart />
          </div>
        )}
        {settings.showMarketShareChart && (
          <div className={styles.chart}>
            <MarketShareChart />
          </div>
        )}
        {settings.showExpenseDonutChart && (
          <div className={styles.chart}>
            <ExpenseDonutChart />
          </div>
        )}
      </div>
      {settings.showTable && (
        <div>
          <Table />
        </div>
      )}
      <div className={styles.settingsIconWrapper} onClick={handleSettings}>
        <IoSettingsSharp />
      </div>
    </div>
  );
};

export default Dashboard;
