import React from "react";
import "../CSS/mainCard.css";
export default function MainCard() {
  return (
    <div className="main-card">
      <div className="info-card">
        <img src="../images/image-jeremy.png" alt="" />
        <p className="name">Report for</p>
        <p className="name">Jeremy</p>
        <p className="title">Robson</p>
      </div>
      <div className="card-controller">
        <p className="controller daily">Daily</p>
        <p className="controller weekly">Weekly</p>
        <p className="controller monthly">Monthly</p>
      </div>
    </div>
  );
}
