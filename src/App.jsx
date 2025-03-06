import React from "react";
import CardList from "./components/CardList/CardList";
import { cardsData } from "./data";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header>
        <h1 className="title">Космічні Таємниці</h1>
      </header>
      <CardList cards={cardsData} />
    </main>
  );
}

export default App;
