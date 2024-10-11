import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemondata = {
  name: "",
  id: null,
  img: "",
  firsttype: "",
  secondtype: "",
  evolution: "",
};

export default async function GetPokemonData(str) {
  axios.get(url + str, {}).then((res) => {
    const data = res.data;
    pokemondata.name = data.name;
    pokemondata.id = data.id;
    pokemondata.img = data.sprites.front_default;
    pokemondata.firsttype = data.types[0].type.name;
    pokemondata.secondtype = data.types[1]?.type?.name ?? "none";

    console.log(pokemondata);
  });
}
