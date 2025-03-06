import React from "react";
import CardList from "./components/CardList/CardList";
import cardsData from "./data";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Галерея карток</h1>
      <CardList cards={cardsData} />
    </div>
  );
};

export default App;
