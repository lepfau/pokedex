import React, { Component } from 'react'
import axios from 'axios';
export class Pokemon extends Component {

state= {
    sprites: [],
    id: 0,
    type: ""
}

typeClass() {
    if(this.state.type === "fire")
    return 'pokemonimgfire'
    else if(this.state.type === "water")
    return 'pokemonimgwater'
    else return "pokemonimg"
}

componentDidMount() {
    axios
      .get(this.props.url)
      .then((responseFromApi) => {
        // console.log(responseFromApi.data.sprites.version['generation-v']['black-white'].animated.back_default);
        this.setState({
          id: responseFromApi.data.id,
          sprites: responseFromApi.data.sprites.versions["generation-v"]['black-white'].animated.front_default,
          type: responseFromApi.data.types[0].type.name
        });
      });
  }


    render() {
        return (
            <div className="pokemonCard">
                <p>{this.props.name.toUpperCase()}</p>
                <p>{this.state.type}</p>
                <img className={this.typeClass()} alt="pokemonimg" src={this.state.sprites}/>
                <p>#{this.state.id}</p>
            </div>
        )
    }
}

export default Pokemon
