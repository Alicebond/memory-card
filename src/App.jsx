// import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import data from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsState, setCardsState] = useState(shuffleCards(data));

  function shuffleCards(array) {
    let currentIndex = array.length - 1,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
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
    setCardsState(shuffleCards(data));
  }

  function handleClick(id) {
    setCardsState((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          if (!i.isClicked) {
            setScore((prevScore) => prevScore + 1);
            return {
              ...i,
              isClicked: !i.isClicked,
            };
          } else {
            updateBestScore();
            setScore(0);
            return i;
          }
        } else return i;
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
        image={item.image}
        name={item.name}
        alt={item.alt}
      />
    );
  });

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div className="cards">{cards}</div>
      <footer className="footer">
        <p>
          All images are from{" "}
          <a
            href={
              "https://southpark.fandom.com/wiki/Portal:Characters/Major_Characters"
            }
          >
            here
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
