// import axios from "axios";
import pokemonlist from "./pokemonlist.json";

const url = "https://pokeapi.co/api/v2/pokemon/";

// #TODO: API Daten nur laden, wenn localStorage leer
// API Daten dann in localStorage speichern (mit Zeitbegrenzung)
// Daten exportieren und für Searchbar und Teamgenerator benutzen

//   GetPokemonData() {
//     axios
//       .get(`https://pokeapi.co/api/v2/pokemon/?offset=50&limit=1100`, {})
//       .then((res) => {
//         const data = res.data;
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   componentDidMount() {
//     this.GetPokemonData();
//   }
// }

export default async function GetPokemonData() {
  for (var pokemonname in pokemonlist) {
    console.log(url + pokemonname);
  }

  // axios.get(url + pokemonname, {}).then((res) => {
  //   const data = res.data;
  //   console.log(data);
  // });

  // pokemondata = {
  //   name: pokemonname,
  //   // url: url + pokemonname,
  // };
  // console.log(pokemondata);
}

// axios
//       .get(url + pokemonname, {})
//       .then((res) => {
//         const data = res.data;
//         // window.localStorage.setItem("Pokemon", JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
