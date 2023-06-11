import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const cardsData = [];
  for (let i = 0; i < 16; i++) {
    cardsData.push({ id: uuidv4() });
  }
  const [score, setScore] = useState(0);
  const [cardsState, setCardsState] = useState(cardsData);

  function handleClick(id) {
    setCardsState((prev) =>
      prev.map((i) => {
        console.log(i);
        if (i.id === id) {
          if (i.isClicked) {
            setScore(0);
            return {
              ...i,
              isClicked: !i.isClicked,
            };
          } else {
            setScore((prevScore) => prevScore + 1);
            return {
              ...i,
              isClicked: true,
            };
          }
        }
      })
    );
  }

  const cards = cardsData.map((item, index) => {
    return (
      <Card
        number={index + 1}
        key={index}
        id={item.id}
        onClick={() => handleClick(item.id)}
      />
    );
  });

  return (
    <>
      <Header score={score} />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
