// import { useState } from 'react'
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const cards = [];
  for (let i = 0; i < 16; i++) {
    cards.push(<Card number={i + 1} />);
  }
  return (
    <>
      <Header />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
