import getDummyCards from "./dummyCards";

const getCards = () => {
        let arrayOfPokemonIDS = [];
        let arrayOfPokemonDetails = [];

        //get an array of non duplicate numbers
        while (arrayOfPokemonIDS.length < 12) {
          arrayOfPokemonIDS.push(Math.floor(Math.random() * 800));
        }


  //       return arrayOfPokemonDetails;
  return getDummyCards();
};
export default getCards;
