import getDummyCards from "./dummyCards";

const getCards = () => {
  let arrayOfPokemonIDS = [];
  let arrayOfPokemonDetails = [];

  //get an array of non duplicate numbers
  while (arrayOfPokemonIDS.length < 12) {
    arrayOfPokemonIDS.push(Math.floor(Math.random() * 800));
  }
  //for each entry in pokemon IDS fetch from the api and return the pokemon data
  const fetchPokemon = async () => {
    arrayOfPokemonIDS.map(async (id) => {
      await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          let mon = {
            name: res.name,
            src: res.sprites.front_default,
            checked: false,
          };

          arrayOfPokemonDetails.push(mon);
        });
    });
  };
  fetchPokemon();

  console.log("running getCards");
  console.log(arrayOfPokemonDetails);

  return arrayOfPokemonDetails;
//   return getDummyCards();
};
export default getCards;
