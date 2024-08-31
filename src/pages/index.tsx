import React, { useEffect, useState } from "react";
import WeatherChart from "@/components/WeatherChart";
import CompanyChart from "@/components/CompanyChart";
import MarketShareChart from "@/components/MarketShareChart";
import Table from "@/components/Table";
import styles from "../styles/home.module.css";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [settings, setSettings] = useState({
    showWeatherChart: true,
    showCompanyChart: true,
    showMarketShareChart: true,
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
      <div className={styles.chartWapper}>
        {settings.showWeatherChart && (
          <div className={styles.weatherChart}>
            <WeatherChart />
          </div>
        )}
        {settings.showCompanyChart && (
          <div className={styles.weatherChart}>
            <CompanyChart />
          </div>
        )}
        {settings.showMarketShareChart && (
          <div className={styles.weatherChart}>
            <MarketShareChart />
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
