import Introduction from "./components/Introduction";
// import GetPokemonData from "./components/pokemon/GetPokemonData";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <GetPokemonData /> */}
      <Introduction />

      <section className="Pokemonchoice">
        <input type="search" placeholder="Search Pokémon" />
        <br />
        {/* https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js */}
        <input type="button" value="Random Pokémon" />

        <div>
          <img src="tbd" alt="tbd"></img>
          <br />
          <span>Name & ID</span>
          <br />
          <span>Types(s)</span>
        </div>
        <input type="button" value="Add to team" />
        <input type="button" value="Evolve choice" />
        <br />

        <label htmlFor="">
          Edition:
          {/* https://react.dev/reference/react-dom/components/select#providing-a-label-for-a-select-box */}
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
        </label>

        <label htmlFor="">Types (tbd)</label>
        <br />
        {/* https://react.tips/checkboxes-in-react-16/ */}

        <button className="GenerateButton">Generate team!</button>
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
