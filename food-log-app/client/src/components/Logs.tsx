import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { format, parseISO, addHours } from "date-fns";
import { API_URL } from "../api";

interface Log {
  date: string;
  meal: string;
  amount: string;
  measure: string;
  hunger: number;
}

export const Logs = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(`${API_URL}/logs`);
        const data = await response.json();
        setLogs(data.logs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div>
      <div>
        <nav>
          <Link to="/">Add meal</Link>
        </nav>
      </div>
      <div>
        <h1>Logs</h1>
      </div>
      <div className="center">
        <table className="center-data">
          <thead>
            <tr>
              <th>Date</th>
              <th>Meal</th>
              <th>Amount</th>
              <th>Hunger</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{format(addHours(parseISO(log.date), -1), "dd MMMM HH:mm")}</td>
                <td>{log.meal}</td>
                <td>{log.amount + log.measure}</td>
                <td>{log.hunger}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
