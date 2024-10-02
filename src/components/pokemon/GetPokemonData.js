import React, { Component } from "react";
import axios from "../../axios";

export default class pokemondata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pokemon: [],
    };
  }

  GetPokemonData() {
    axios
      .get(`/pokemon/?offset=50&limit=1100`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.GetPokemonData();
  }

  render() {
    return <div></div>;
  }
}
