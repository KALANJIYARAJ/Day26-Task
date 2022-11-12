import React, { useEffect, useState } from "react";
import Card from "./Card";

function Dashboard() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("This code will run on Every Mount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("This code will run on Every destroy");
    };
  }, []);

  useEffect(() => {});
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <button
          onClick={() => setCounter(counter + 1)}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </button>
      </div>
       <Card />
    </div>
  );
}

export default Dashboard;
