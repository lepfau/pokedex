import React, { Component } from "react";
import axios from "axios";
export class Pokemon extends Component {
  state = {
    sprites: [],
    id: 0,
    type: "",
  };

  typeClass() {
    if (this.state.type === "fire") return "red";
    else if (this.state.type === "water") return "blue";
    else if (this.state.type === "normal") return "brown";
    else if (this.state.type === "poison") return "purple";
    else if (this.state.type === "bug") return "lightgreen";
    else if (this.state.type === "grass") return "green";
    else return "white";
  }

  

  componentDidMount() {
    axios.get(this.props.url).then((responseFromApi) => {
      // console.log(responseFromApi.data.sprites.version['generation-v']['black-white'].animated.back_default);
      this.setState({
        id: responseFromApi.data.id,
        sprites:
          responseFromApi.data.sprites.versions["generation-v"]["black-white"]
            .animated.front_default,
        type: responseFromApi.data.types[0].type.name,
      });
    });
  }

  render() {
    return (
      <div className="pokemonCard" >
        <p>{this.props.name.toUpperCase()}</p>

        <img
          style={{
            border: "3px solid " + this.typeClass(),
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            padding: "15px",
            backgroundColor: "whitesmoke",
           
          }}
          alt="pokemonimg"
          src={this.state.sprites}
        />
        <p>#{this.state.id}</p>
        <p>Type: {this.state.type}</p>
      </div>
    );
  }
}

export default Pokemon;
