import pokemonlist from "./pokemon/pokemonlist";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import GetPokemonData from "./pokemon/GetPokemonData";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function SearchbarAutocomplete() {
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
