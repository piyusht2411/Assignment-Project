import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { settingsConfig } from "@/utils/constant";
import styles from "../styles/settings.module.css";
import { IoArrowBackSharp } from "react-icons/io5";

const Settings = () => {
  const router = useRouter();
  const [settings, setSettings] = useState({
    showWeatherChart: true,
    showCompanyChart: true,
    showMarketShareChart: true,
    showExpenseDonutChart: true,
    showTable: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("dashboardSettings", JSON.stringify(settings));
    router.push("/");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.backIcon} onClick={handleBack}>
          <IoArrowBackSharp />
        </div>
        <h2 className={styles.heading}>Settings</h2>
        <div className={styles.checkboxGroup}>
          {settingsConfig.map((setting) => (
            <label key={setting.name} className={styles.checkbox}>
              <input
                type="checkbox"
                name={setting.name}
                checked={settings[setting.name as keyof typeof settings]}
                onChange={handleChange}
              />
              {setting.label}
            </label>
          ))}
        </div>
        <button onClick={handleSave} className={styles.button}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;
