import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { settingsConfig } from "@/utils/constant";

const Settings = () => {
  const router = useRouter();
  const [settings, setSettings] = useState({
    showWeatherChart: true,
    showCompanyChart: true,
    showMarketShareChart: true,
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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard Settings</h2>
      {settingsConfig.map((setting) => (
        <div key={setting.name}>
          <label>
            <input
              type="checkbox"
              name={setting.name}
              checked={settings[setting.name as keyof typeof settings]}
              onChange={handleChange}
            />
            {setting.label}
          </label>
        </div>
      ))}
      <button onClick={handleSave} style={{ marginTop: "20px" }}>
        Save and Go to Dashboard
      </button>
    </div>
  );
};

export default Settings;
