import React from "react";
import "../CSS/mainCard.css";
import mainImage from "../images/image-jeremy.png";
export default function MainCard() {
  return (
    <div className="main-card">
      <div className="info-card">
        <img src={mainImage} alt="" />
        <p className="title">Report for</p>
        <p className="name">Jeremy</p>
        <p className="name">Robson</p>
      </div>
      <div className="card-controller">
        <p className="controller daily">Daily</p>
        <p className="controller weekly">Weekly</p>
        <p className="controller monthly">Monthly</p>
      </div>
    </div>
  );
}
