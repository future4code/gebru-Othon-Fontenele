import React, {useState, useEffect} from "react";
import axios from "axios";
import App from "../../App.js";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState('')

  // método que roda após a montagem do componente
  useEffect(() => {
    setPokemon(props.pokemon);
  }, [])
  
  useEffect(() => {
      if (prevProps.pokemon !== props.pokemon) {
        pegaPokemon(props.pokemon);
      }
  }, [prevProps])
  

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        
        setPokemon({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
    // const pokemon = {pokemon};

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  
}

export default PokeCard;