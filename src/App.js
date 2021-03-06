import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/`)
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setLoading(false);
        setPokemon(results.map((res) => res.data));
      });
  }, []);

  function handleClick() {
    setCount(count + 10);
  }

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <div className="pokemons">
        {loading ? (
          <img
            alt="loading gif"
            src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"
          />
        ) : (
          pokemon.slice(0, count).map((p) => (
            <div key={p.id} className="pokemon-card">
              <p>{p.name[0].toUpperCase() + p.name.substring(1)}</p>
              <img
                alt="pokemonimg"
                className="pokemon-image"
                src={
                  p.sprites.versions["generation-v"]["black-white"].animated
                    .front_default
                }
              />
            </div>
          ))
        )}
        <button onClick={() => handleClick()}>Load more...</button>
      </div>
    </div>
  );
}
