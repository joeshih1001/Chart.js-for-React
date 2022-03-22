import React, { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import RadarChart from "./components/RadarChart";
import { UserData } from "./Data";

const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.nutrients),
    datasets: [
      {
        label: "鮭魚",
        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
    
  });
 const [options, setOptions] = useState({
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Radar Chart'
  },
  elements: {
    line: {
      borderWidth: 1,
    },
  },
  scale: {
    r:{
      beginAtZero: true,
      min:0,   
      max:100,
    },
    // angleLines: {
    //   color: "rgba(255, 255, 255, .3)",
    //   lineWidth: 1
    // },
    // gridLines: {
    //   color: "rgba(255, 255, 255, .3)",
    //   circular: true
    // },
    ticks: {
      min: 0,
      max: 50,
      stepSize: 10,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    }
  },
  

  });

  return (
    <div>
      <div style={{ width: "500px" }}>
        <RadarChart chartData={userData} options={options} />
      </div>
      {/* <div style={{width:"700px"}}>
        <BarChart chartData={userData} />
      </div>
      <div style={{width:"700px"}}>
        <LineChart chartData={userData} />
      </div>
      <div style={{width:"700px"}}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
};

export default App;
