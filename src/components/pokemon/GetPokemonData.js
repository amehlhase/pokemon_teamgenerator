import axios from "axios";
import pokemonlist from "./pokemonlist";

const url = "https://pokeapi.co/api/v2/pokemon/";
let pokemondata = {
  name: "Pikachu",
  id: 25,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  firsttype: "electric",
  secondtype: "",
  evolution: "",
};

export default function GetPokemonData(str) {
  axios.get(url + str, {}).then((res) => {
    const data = res.data;
    pokemondata.name = data.name;
    pokemondata.id = data.id;
    pokemondata.img = data.sprites.front_default;
    pokemondata.firsttype = data.types[0].type.name;
    pokemondata.secondtype = data.types[1]?.type?.name ?? "";
    console.log(pokemondata);
  });
}

export function DisplayPokemon() {
  return (
    <div>
      <img src={pokemondata.img} alt={pokemondata.name}></img>
      <br />
      <span>
        #{pokemondata.id} {pokemondata.name}
      </span>
      <br />
      <span>
        {pokemondata.firsttype}
        {pokemondata.secondtype}
      </span>
    </div>
  );
}

export function PickRandomPokemon() {
  let result;
  let keys = Object.keys(pokemonlist);
  result = pokemonlist[keys[(keys.length * Math.random()) << 0]];
  console.log(result.name);
  GetPokemonData(result.name);
}

// export function CheckPokemonSlot() {
//   pokemondata.name ? console.log("name ist nicht leer") : PickRandomPokemon();
// }
