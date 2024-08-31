import React from "react";
import { tableData } from "../utils/constant";
import styles from "../styles/table.module.css";

const Table: React.FC = () => {
  const headers = Object.keys(tableData[0]);

  return (
    <div className={styles.tableWrapper}>
      <h2>Table Data</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            {headers.map((header) => (
              <th key={header} className={styles.tableHeader}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => (
                <td key={header} className={styles.tableData}>
                  {row[header as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
