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
        console.log(`responseFromApi.data.sprites.version.generation-v.black-white.animated.back_default`);
        this.setState({
          
          sprites: responseFromApi.data.sprites.front_default
        });
      });
  }


    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <img src={this.state.sprites}/>
            </div>
        )
    }
}

export default Pokemon
