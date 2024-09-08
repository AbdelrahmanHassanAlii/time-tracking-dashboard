import { useState } from "react";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import MainCard from "./Components/MainCard";
import { Link } from "react-router-dom";

function App() {
  const [interval, setInterval] = useState("monthly");

  const changeInterval = (event) => {
    // console.log(event.target.innerHTML.toLowerCase());
    setInterval(event.target.innerHTML.toLowerCase());
  };

  return (
    <>
      <div className="App">
        <MainCard changeInterval={changeInterval} />
        <CardsContainer interval={interval} />
      </div>
      <h1 class="attribution">
        Responsive Time Tracker Dashboard - Made By{" "}
        <Link
          to="https://abdelrahmanhassanalii.github.io/card/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abderahman Hassan
        </Link>
      </h1>
    </>
  );
}

export default App;
