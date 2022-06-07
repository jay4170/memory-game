import { v4 as uuidv4 } from "uuid";
import "./Game.css";
import getCards from "./getCards";
import shuffle from "./shuffle.js";

const Game = (props) => {
  const cards = props.cards;
  const setCards = props.setCards;

  const check = (card) => {
    if (card.checked === true) {
      props.restart();
      setCards(getCards());
    } else {
      props.incrementScore(1);
      let cardIndex = cards.findIndex((obj) => obj === card);
      const oldCards = [...cards];
      oldCards[cardIndex].checked = true;
      setCards(oldCards);
      setCards(shuffle(cards));
    }
  };

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
            <img className="card_image" alt={`a ${card.name}`} src={card.src}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Game;
