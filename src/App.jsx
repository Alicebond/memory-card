import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const cardsData = [];
  for (let i = 0; i < 16; i++) {
    cardsData.push({ id: uuidv4(), num: i + 1 });
  }
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [cardsState, setCardsState] = useState(cardsData);

  function shuffleCards() {
    let currentIndex = cardsData.length - 1, randomIndex;
    while(currentIndex >= 0) {
      rendomIndex = Math.floor(Math.random() + currentIndex);
      currentIndex--;
      [cardsData[currentIndex], cardsData[randomIndex]] = [cardsData[randomIndex], cardsData[currentIndex]];
    }
  }

  function updateBestScore() {
    if(score > bestScore) setBestScore(score);
  }

  function handleClick(id) {
    setCardsState((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          if (i.isClicked) {
            setScore(0);
            shuffleCards()
            return {
              ...i,
              isClicked: !i.isClicked,
            };
          } else {
            setScore((prevScore) => prevScore + 1);
            updateBestScore()
            return {
              ...i,
              isClicked: true,
            };
          }
        } else {
          return i;
        }
      })
    );
  }

  const cards = cardsState.map((item, index) => {
    return (
      <Card
        number={item.num}
        key={index}
        id={item.id}
        onClick={() => handleClick(item.id)}
      />
    );
  });

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
