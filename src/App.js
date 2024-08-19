import { useState } from "react";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import MainCard from "./Components/MainCard";

function App() {
  const [interval, setInterval] = useState("monthly");

  const changeInterval = (event) => {
    // console.log(event.target.innerHTML.toLowerCase());
    setInterval(event.target.innerHTML.toLowerCase());
  };

  return (
    <div className="App">
      <MainCard changeInterval={changeInterval} />
      <CardsContainer interval={interval} />
    </div>
  );
}

export default App;
