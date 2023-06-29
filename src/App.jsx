// import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import data from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsState, setCardsState] = useState(data);

  function shuffleCards(array) {
    let currentIndex = array.length - 1,
      randomIndex;
    while (currentIndex >= 0) {
      randomIndex = Math.floor(Math.random() + currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function updateBestScore() {
    if (score >= bestScore) setBestScore(score);
  }

  function handleClick(id) {
    setCardsState((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          if (i.clickTime === 0) {
            setScore((prevScore) => prevScore + 1);
            return {
              ...i,
              clickTime: i.clickTime++,
            };
          } else return i;
        } else return i;
      })
    );

    cardsState.forEach((i) => {
      if (i.id === id) {
        if (i.clickTime === 2) {
          updateBestScore();
          setScore(0);
          setCardsState(shuffleCards(data));
        }
      }
    });
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
