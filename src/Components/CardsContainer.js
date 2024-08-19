import React, { useEffect, useState } from "react";
import { allData } from "../APIs Connection/api";
import Card from "./Card";
import "../CSS/cardContainer.css";
export default function CardsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(allData)
      .then((results) => {
        setData(results);
        console.log("All data fetched successfully:", results);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the data:", error);
      });
  }, []);
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}
