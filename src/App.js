import React from "react";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import { useState } from "react";
import pokemonlist from "./components/pokemon/pokemonlist";
import { Capitalize, shuffleArray } from "./components/Helpers";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import * as colours from "./components/pokemon/typecolours";
import pokeball from "./img/pokeball.png";

// #TODO: Fehlermeldung für API 404 Error

function App() {
  let typeurls = [];
  const [name, setName] = useState("pikachu");
  const [number, setNumber] = useState(25);
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const [firsttype, setFirsttype] = useState("electric");
  const [secondtype, setSecondtype] = useState("");

  const [choice, setChoice] = useState({
    name: "Make a choice",
    number: 0,
    image: pokeball,
    firsttype: "",
    secondtype: "",
    selected: false,
  });

  const [team, setTeam] = useState([
    {
      id: 0,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
    },
    {
      id: 1,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
    },
    {
      id: 2,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
    },
    {
      id: 3,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
    },
    {
      id: 4,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
    },
  ]);

  function SelectChoice() {
    setChoice((c) => ({
      ...c,
      name: name,
      number: number,
      image: image,
      firsttype: firsttype,
      secondtype: secondtype,
      selected: true,
    }));
  }

  function RemoveChoice() {
    setChoice((c) => ({
      ...c,
      name: "Make a choice",
      number: 0,
      image: pokeball,
      firsttype: "",
      secondtype: "",
      selected: false,
    }));
  }

  function DisplayChoice({ name, image, number, firsttype, secondtype }) {
    return (
      <div className="Teamcard">
        <img
          src={image}
          alt={name}
          className={image === pokeball ? "pokeball" : "pokemon"}
        />
        <br />
        <span className={number === 0 ? "hidden" : ""}>#{number}</span>
        <span> {Capitalize(name)}</span>
        <br />
        <DisplayTypeButtons firsttype={firsttype} secondtype={secondtype} />
        <br />
        <br />
        <button onClick={RemoveChoice} className={number === 0 ? "hidden" : ""}>
          Remove
        </button>
      </div>
    );
  }

  function CreateTeamcards({ name, image, number, firsttype, secondtype }) {
    return (
      <div className="Teamcard">
        <img
          src={image}
          alt={name}
          className={image === pokeball ? "pokeball" : "pokemon"}
        />
        <br />
        <span className={number === 0 ? "hidden" : ""}>#{number}</span>
        <span> {Capitalize(name)}</span>
        <br />
        <DisplayTypeButtons firsttype={firsttype} secondtype={secondtype} />
        <br />
        <br />
      </div>
    );
  }

  function DisplayTypeButtons({ firsttype, secondtype }) {
    let bgcolourfirst = colours["colour_type_" + firsttype];
    let bgcoloursecond = colours["colour_type_" + secondtype];

    return (
      <>
        <span className="type" style={{ backgroundColor: bgcolourfirst }}>
          {firsttype}
        </span>
        <span className="type" style={{ backgroundColor: bgcoloursecond }}>
          {secondtype}
        </span>
      </>
    );
  }

  function DisplayPokemon() {
    return (
      <div>
        <img src={image} alt={Capitalize(name)}></img>
        <br />
        <span>
          #{number} {Capitalize(name)}
        </span>
        <br />
        <DisplayTypeButtons firsttype={firsttype} secondtype={secondtype} />
      </div>
    );
  }

  function SearchbarAutocomplete() {
    const handleOnSearch = (string, results) => {
      // console.log(string, results);
    };

    const handleOnHover = (result) => {
      // console.log(result);
    };

    const handleOnSelect = (item) => {
      GetPokemonData(item.name);
    };

    const handleOnFocus = () => {
      // console.log("Focused");
    };

    const formatResult = (item) => {
      return (
        <>
          <span style={{ display: "block", textAlign: "left" }}>
            #{item.id} {Capitalize(item.name)}
          </span>
        </>
      );
    };

    return (
      <ReactSearchAutocomplete
        items={pokemonlist}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        placeholder="Search Pokemon"
      />
    );
  }

  function GetPokemonData(str) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios.get(url + str, {}).then((res) => {
      const data = res.data;
      setName(data.name);
      setNumber(data.id);
      setImage(data.sprites.front_default);
      setFirsttype(data.types[0].type.name);
      setSecondtype(data.types[1]?.type?.name ?? "");
    });
  }

  function PickRandomPokemon() {
    let result;
    let keys = Object.keys(pokemonlist);
    result = pokemonlist[keys[(keys.length * Math.random()) << 0]];

    GetPokemonData(result.name);
  }

  async function getTypeUrls() {
    typeurls = [];
    let types = [
      "bug",
      "dark",
      "dragon",
      "electric",
      "fairy",
      "fighting",
      "fire",
      "flying",
      "ghost",
      "grass",
      "ground",
      "ice",
      "normal",
      "poison",
      "psychic",
      "rock",
      "steel",
      "water",
    ];
    let result = [];
    const url = "https://pokeapi.co/api/v2/type/";

    types = types.filter(function (e) {
      return e !== choice.firsttype;
    });
    result.push(shuffleArray(types).slice(0, 5));

    for (let i = 0; i < result[0].length; i++) {
      typeurls.push(url + result[0][i]);
    }

    return typeurls;
  }

  async function getPokemonurls() {
    return await Promise.all(
      typeurls.map((url) =>
        axios.get(url).then((res) => {
          const data = res.data;
          const random = Math.floor(Math.random() * data.pokemon.length);
          return data.pokemon[random].pokemon.url;
        })
      )
    );
  }

  async function GenerateTeam() {
    if (choice.selected) {
      await getTypeUrls();
      const pokemonurls = await getPokemonurls();

      setTeam([]);

      const pokemon = await Promise.all(
        pokemonurls.map((url) =>
          axios.get(url).then((res) => {
            const pokemondata = res.data;
            const pokemon = {
              name: pokemondata.name,
              number: pokemondata.id,
              image: pokemondata.sprites.front_default,
              firsttype: pokemondata.types[0].type.name,
              secondtype: pokemondata.types[1]?.type?.name ?? "",
            };
            return pokemon;
          })
        )
      );

      setTeam(pokemon);
    } else {
      window.alert("Please choose at least one Pokémon :)");
    }
  }

  return (
    <div className="App">
      <Introduction />
      <section className="Pokemonchoice">
        <SearchbarAutocomplete />
        <br />
        <input
          type="button"
          value="Random Pokémon"
          onClick={PickRandomPokemon}
        />
        <DisplayPokemon />
        <br />
        <input type="button" value="Add to team" onClick={SelectChoice} />
        {/* <input type="button" value="Evolve choice" /> */}
        <br />
        {/* <label htmlFor="">
          Edition:
         
          <select name="">
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Gold</option>
            <option value="">Silver</option>
            <option value="">Crystal</option>
            <option value="">Ruby</option>
            <option value="">Sapphire</option>
            <option value="">FireRed</option>
            <option value="">LeafGreen</option>
            <option value="">Emerald</option>
            <option value="">Diamond</option>
            <option value="">Pearl</option>
            <option value="">Platinum</option>
            <option value="">HeartGold</option>
            <option value="">SoulSilver</option>
            <option value="">Black</option>
            <option value="">White</option>
            <option value="">Black 2</option>
            <option value="">White 2</option>
            <option value="">X</option>
            <option value="">Y</option>
            <option value="">Omega Ruby</option>
            <option value="">Alpha Sapphire</option>
            <option value="">Sun</option>
            <option value="">Moon</option>
            <option value="">Ultra Sun</option>
            <option value="">Ultra Moon</option>
            <option value="">Let's Go, Pikachu!</option>
            <option value="">Let's Go, Eevee!</option>
            <option value="">Sword</option>
            <option value="">Shield</option>
            <option value="">Brilliant Diamond</option>
            <option value="">Shining Pearl</option>
            <option value="">Legends: Arceus</option>
            <option value="">Scarlet</option>
            <option value="">Violet</option>
          </select>
          <br />
        </label> */}
        {/* <label htmlFor="">Types (tbd)</label> */}
        {/* https://react.tips/checkboxes-in-react-16/ */}
        {/* <button className="GenerateButton">Generate team!</button> */}
      </section>

      <section className="Teamgenerator">
        <h2>Your team</h2>
        <div className="Teamcards">
          <DisplayChoice
            key="choice"
            name={choice.name}
            image={choice.image}
            number={choice.number}
            firsttype={choice.firsttype}
            secondtype={choice.secondtype}
            seclected={choice.selected}
          />
          {team.map((team) => (
            <CreateTeamcards
              key={team.id}
              name={team.name}
              image={team.image}
              number={team.number}
              firsttype={team.firsttype}
              secondtype={team.secondtype}
            />
          ))}
        </div>
        <button className="GenerateButton" onClick={GenerateTeam}>
          Generate Team
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
