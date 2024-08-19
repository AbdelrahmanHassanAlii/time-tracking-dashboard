import React, { useState } from "react";
import "../CSS/mainCard.css";
import mainImage from "../images/image-jeremy.png";

export default function MainCard({ changeInterval }) {
  const [active, setActive] = useState("daily");

  const handleClick = (event) => {
    setActive(event.target.innerHTML.trim().toLowerCase());
    changeInterval(event);
  };

  return (
    <div className="main-card">
      <div className="info-card">
        <div className="profile-image">
          <img src={mainImage} alt="Profile" />
        </div>
        <div className="card-contetnt">
          <p className="title">Report for</p>
          <p className="name">Jeremy</p>
          <p className="name">Robson</p>
        </div>
      </div>
      <div className="card-controller">
        <p
          className={`controller daily ${active === "daily" ? "active" : ""}`}
          onClick={handleClick}
        >
          Daily
        </p>
        <p
          className={`controller weekly ${active === "weekly" ? "active" : ""}`}
          onClick={handleClick}
        >
          Weekly
        </p>
        <p
          className={`controller monthly ${
            active === "monthly" ? "active" : ""
          }`}
          onClick={handleClick}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}
