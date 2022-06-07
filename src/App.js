import { useEffect, useState } from "react";
import "./App.css";
import getCards from "./Game/getCards";
import Game from "./Game/Game";
import logo from "./images/pokemon-logo-png-0.png";
import shuffle from "./Game/shuffle";
// import getCards from "./Game/getCards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(shuffle(getCards()));

  
  const restart = () => {
    console.log("restart function");
    setCurrentScore(0);
    setCards(shuffle(getCards()));
  };
  //Increments the score on a successful selection
  const incrementScore = (increment) => {
    console.log("Incrementing");
    setCurrentScore(currentScore + increment);
  };

  //manages the scores
  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    if (currentScore === 12) {
      alert("Completed");
      restart();
    }
  }, [currentScore, bestScore]);

  //When the card state has been changed at all, shuffle
  useEffect(() => {
    let newCards = shuffle(cards);
    setCards(newCards);
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
        <button className="button" onClick={restart}>
          Reset Game
        </button>
      </div>
      <div className="game_board">
        <Game
          cards={cards}
          setCards={setCards}
          incrementScore={incrementScore}
          restart={restart}
        />
      </div>
    </div>
  );
}

export default App;
