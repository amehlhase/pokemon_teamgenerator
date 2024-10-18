import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import { useState } from "react";
import pokemonlist from "./components/pokemon/pokemonlist";
import { Capitalize } from "./components/Helpers";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function App() {
  const [name, setName] = useState("pikachu");
  const [number, setNumber] = useState(25);
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const [firsttype, setFirsttype] = useState("electric");
  const [secondtype, setSecondtype] = useState("");
  // const [evolution, setEvolution] = useState(true);

  function DisplayPokemon() {
    return (
      <div>
        <img src={image} alt={Capitalize(name)}></img>
        <br />
        <span>
          #{number} {Capitalize(name)}
        </span>
        <br />
        <span>{firsttype} </span>
        <span>{secondtype}</span>
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
    console.log(result.name);
    GetPokemonData(result.name);

    // setName((n) => ({
    //   ...n, Capitalize(result.name),
    // }));
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
        <input type="button" value="Add to team" />
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

        <label htmlFor="">Types (tbd)</label>
        <br />
        {/* https://react.tips/checkboxes-in-react-16/ */}

        {/* <button className="GenerateButton">Generate team!</button> */}
      </section>

      <section className="Teamgenerator">
        <h2>Your team</h2>
        <div className="Teamcards">
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
          <hr></hr>
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
          <div className="Teamcard">
            <img src="tbd" alt="tbd" />
            <br />
            <span>Name & ID</span>
            <br />
            <span>Types(s)</span>
            <br />
            <button>Evolve</button>
            <button>Remove</button>
          </div>
        </div>
        <button className="GenerateButton">Generate new</button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
