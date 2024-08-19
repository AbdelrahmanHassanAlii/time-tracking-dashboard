import React from "react";
import "../CSS/card.css";
import ellipsis from "../images/icon-ellipsis.svg";

export default function Card({ data, interval }) {
  const backgroundColor = data.title.toLowerCase().replace(/\s+/g, "-");

  // Dynamically require the image based on the backgroundColor
  const image = require(`../images/icon-${backgroundColor}.svg`);

  let intervalText = "";
  if (interval === "daily") {
    intervalText = "Day";
  } else if (interval === "weekly") {
    intervalText = "Week";
  } else if (interval === "monthly") {
    intervalText = "Month";
  }

  return (
    <div
      className={`card ${backgroundColor}-card`}
      style={{ backgroundColor: `var(--${backgroundColor})` }}
    >
      <div className="icon">
        <img src={image} alt={`${data.title} icon`} />
      </div>
      <div className="bottom-of-card">
        <div className="header">
          {data.title}
          <img src={ellipsis} alt={`${data.title} icon`} />
        </div>
        <div className="stats">
          <p className="current">{data.timeframes[interval].current}hrs</p>
          <p className="previous">
            Last {intervalText} - {data.timeframes[interval].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
