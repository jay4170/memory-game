import { useEffect, useState } from "react";
import "./App.css";
import Game from "./Game/Game";
import logo from "./images/pokemon-logo-png-0.png";
// import shuffle from "./Game/shuffle";
// import getCards from "./Game/getCards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let arrayOfPokemonIDS = [];
    let tempArray = [];
    while (arrayOfPokemonIDS.length < 12) {
      arrayOfPokemonIDS.push(Math.floor(Math.random() * 800));
    }

    arrayOfPokemonIDS.forEach(async (id) => {
      (async () => {
        const APIdata = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        const res = await APIdata.json();
        let mon = {
          name: res.name,
          src: res.sprites.front_default,
          checked: false,
        };

        tempArray.push(mon);
        setCards(tempArray);
      })();
    });
  }, [gameOver]);

  const incrementScore = (increment) => {
    console.log("Incrementing");
    setCurrentScore(currentScore + increment);
  };

  const start = () => {
    setGameOver(false);
    setCurrentScore(0);
    console.log("restart");
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      console.log("Setting best Score");
      setBestScore(currentScore);
    }
    if (currentScore === 12) {
      console.log("completed");
      setGameOver(true);
      alert("Completed");
      start();
    }
  }, [currentScore]);

  // useEffect(() => {
  //   setCards(shuffle(cards));
  // }, [cards]);

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
      setGameOver={setGameOver}
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
