import React, { Component } from 'react'
import axios from 'axios';
import Pokemon from "../components/Pokemon"

export class Pokemons extends Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        axios
          .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
          .then((responseFromApi) => {
            console.log(responseFromApi.data);
            this.setState({
              pokemons: responseFromApi.data.results,
            });
          });
      }


    render() {
        return (
            <div className="pokemons">
             {this.state.pokemons.map((pokemon => {
                 return (
                     <div key={pokemon.name}>
                 <Pokemon name={pokemon.name} url={pokemon.url} />
                 </div>
             )}))}
            </div>
        )
    }
}

export default Pokemons
