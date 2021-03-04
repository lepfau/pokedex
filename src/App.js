import React, { useState, useEffect } from "react";
import axios from "axios";


export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0/")
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


 
  return (
    <div className="App">
      <h1>Example</h1>
      {loading ? 
  ( <img src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"/>
  )
 : (
        pokemon.map((p) => (
          <div>
            <p>{p.name}</p>
           <img src={p.sprites.front_default}/>
          </div>
        ))
      )}
    </div>
  );
}
