/** @format */

import React from "react";
import "./home.css";
import BarChart from "../reuseable/chart";

const Home = () => {
  const data = [
    { name: "TROPHY 600 RGB", value: 7000 },
    { name: "GOLDBERG RGB", value: 1500 },
    { name: "HERO 600 RGB", value: 2500 },
  ];
  const data1 = [
    { name: "TROPHY 600 RGB", value: 7000 },
    { name: "GOLDBERG RGB", value: 500 },
    { name: "HERO 600 RGB", value: 2000 },
  ];
  const data2 = [
    { name: "TROPHY 600 RGB", value: 200 },
    { name: "GOLDBERG RGB", value: 100 },
    { name: "HERO 600 RGB", value: 500 },
  ];
  const data3 = [
    { name: "TROPHY 600 RGB", value: 5000 },
    { name: "GOLDBERG RGB", value: 2100 },
    { name: "HERO 600 RGB", value: 1000 },
  ];
  const data4 = [
    { name: "TROPHY 600 RGB", value: 6000 },
    { name: "GOLDBERG RGB", value: 3000 },
    { name: "HERO 600 RGB", value: 1700 },
  ];
  const data5 = [
    { name: "TROPHY 600 RGB", value: 700 },
    { name: "GOLDBERG RGB", value: 1200 },
    { name: "HERO 600 RGB", value: 3000 },
  ];
  const data6 = [
    { name: "TROPHY 600 RGB", value: 800 },
    { name: "GOLDBERG RGB", value: 9000 },
    { name: "HERO 600 RGB", value: 2500 },
  ];
  return (
    <div className="homepage">
      <div>
        <h1>Top Selling Products in January</h1>
        <BarChart data={data} />
      </div>
      <div>
        <h1>Top Selling Products in Febuary</h1>
        <BarChart data={data1} />
      </div>
      <div>
        <h1>Top Selling Products in March</h1>
        <BarChart data={data2} />
      </div>
      <div>
        <h1>Top Selling Products in April</h1>
        <BarChart data={data3} />
      </div>
      <div>
        <h1>Top Selling Products in May</h1>
        <BarChart data={data4} />
      </div>
      <div>
        <h1>Top Selling Products in June</h1>
        <BarChart data={data5} />
      </div>

    </div>
  );
};

export default Home;
