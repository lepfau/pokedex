import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from "../components/Pokemon";




function Pokemons() {

const [pokemons, setpokemons] = useState([]);


useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/")
    .then(res => {
        setpokemons(res.data.results)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


    return (
        <div>
    {pokemons.map((pokemon) => {
        return (
            <div>
                <Pokemon url={pokemon.url} name={pokemon.name} />
                </div>
        )
    })}

        </div>
    )
}

export default Pokemons


// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/