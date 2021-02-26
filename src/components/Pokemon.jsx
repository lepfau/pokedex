import React, { Component } from 'react'
import axios from 'axios';
export class Pokemon extends Component {

state= {
    sprites: []
}

componentDidMount() {
    axios
      .get(this.props.url)
      .then((responseFromApi) => {
        // console.log(responseFromApi.data.sprites.version['generation-v']['black-white'].animated.back_default);
        this.setState({
          
          sprites: responseFromApi.data.sprites.versions["generation-v"]['black-white'].animated.front_default
        });
      });
  }


    render() {
        return (
            <div className="pokemonCard">
                <p>{this.props.name.toUpperCase()}</p>
                <img className="pokemonimg" alt="pokemonimg" src={this.state.sprites}/>
            </div>
        )
    }
}

export default Pokemon
