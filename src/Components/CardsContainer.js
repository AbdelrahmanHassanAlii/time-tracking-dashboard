import React, { useEffect, useState } from "react";
import { allData } from "../APIs Connection/api";
import Card from "./Card";
import "../CSS/cardContainer.css";
export default function CardsContainer({ interval }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(allData)
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the data:", error);
      });
  }, []);
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card key={index} data={item} color={"blue"} interval={interval} />
      ))}
    </div>
  );
}
