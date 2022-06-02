import { useEffect } from "react";
import getDummyCards from "./dummyCards";
import { v4 as uuidv4 } from "uuid";
import "./Game.css";
import shuffle from "./shuffle.js";

const Game = (props) => {
  const cards = props.cards;
  const setCards = props.setCards;
  const setGameOver = props.setGameOver;

  const check = (card) => {
    if (card.checked === true) {
      setCards(shuffle(cards));
      setGameOver(true);
    } else {
      props.incrementScore(1);
      let cardIndex = cards.findIndex((obj) => obj === card);
      const oldCards = [...cards];
      oldCards[cardIndex].checked = true;
      setCards(oldCards);
      setCards(shuffle(cards));
    }
  };

  useEffect(() => {
    let newCards = shuffle(cards);
    setCards(newCards);
  }, [cards]);

  return (
    <div className="card_deck">
      {cards.map((card) => {
        return (
          <div
            className="a_card"
            onClick={() => {
              check(card);
            }}
            key={uuidv4()}
          >
            <h2>{card.name}</h2>
            <img alt={`a ${card.name}`} src={card.src}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Game;
