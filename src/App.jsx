import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [score, setScore] = useState(0);
  const [cardState, setCardState] = useState({});

  function handleClick() {
    if (cardState.isClicked) {
      setScore(0);
      setCardState((prevState) => ({
        ...prevState,
        isClicked: !prevState.isClicked,
      }));
    } else {
      setCardState((prevState) => ({
        ...prevState,
        isClicked: true,
      }));
      setScore((prevScore) => prevScore + 1);
    }
  }

  const cards = [];
  for (let i = 0; i < 16; i++) {
    cards.push(
      <Card number={i + 1} key={uuidv4()} id={uuidv4()} onClick={handleClick} />
    );
  }
  return (
    <>
      <Header score={score} />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
