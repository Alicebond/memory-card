import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [score, setScore] = useState(1);
  const cards = [];
  for (let i = 0; i < 16; i++) {
    cards.push(<Card number={i + 1} key={uuidv4()} id={uuidv4()} />);
  }
  return (
    <>
      <Header score={score} />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
