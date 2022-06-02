import { useEffect, useState } from "react";
import "./App.css";
import Game from "./Game/Game";
import logo from "./images/pokemon-logo-png-0.png";
import shuffle from "./Game/shuffle";
import getCards from "./Game/getCards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(getCards());

  const incrementScore = (increment) => {
    console.log("Incrementing");
    setCurrentScore(currentScore + increment);
  };

  const start = () => {
    setCurrentScore(0);
    console.log("Start");
    setCards(getCards());
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      console.log("Setting best Score");
      setBestScore(currentScore);
    }
    if (currentScore === 12) {
      console.log("completed");
      alert("Completed");
      start();
    }
  }, [currentScore]);

  useEffect(() => {
    setCards(shuffle(cards));
  }, [cards]);

  return (
    <div className="App">
      <div>
        <h2 className="heading">
          Remember That{" "}
          <img className="inTextLogo " alt="pokemon Logo" src={logo} />
        </h2>
        <h3>Current Score: {currentScore}</h3>
        <h3>Best Score {bestScore}</h3>
        <button onClick={start}>Reset Game</button>
      </div>
      <Game
        cards={cards}
        setCards={setCards}
        incrementScore={incrementScore}
        restart={start}
      />
      <div>Footer</div>
    </div>
  );
}

export default App;
