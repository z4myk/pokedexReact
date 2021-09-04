import React, { useState } from "react";
export const Search = (props) => {
  const [searchData, setSearchData] = useState("");
  const [pokemon, setPokemon] = useState("");

  const getPokemonBySearch = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchData}`;
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setPokemon(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const onClick = async (e) => {
    getPokemonBySearch(pokemon);
  };
  console.log(pokemon);
  return (
    <>
      <input
        type="text"
        placeholder="Nombre del pokemon"
        className="form-control w-50 container border-danger"
        onChange={handleInputChange}
      />
      <div>
        <button
          className="btn btn-success w-50 my-1 botonEnviar"
          onClick={onClick}
        >
          Buscar
        </button>
      </div>
      <div className="container ">
        {pokemon && (
          <div className="cardbodySearch">
            <div className="redondelPokemon">
            <span className="mx-4">#{pokemon.id}</span>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemonphoto"
              />
            </div>

              <span className="my-3 text-center">Nombre: {pokemon.name}</span>
              <hr />
              <span className="text-center">Peso: {pokemon.weight}kg</span>
              <br />
              <span className="text-center">Tipo: {pokemon.types.map(type => (
             <span>{type.type.name}</span>
              ))} </span>
              <br />
              <span className="text-center">Habilidad: {pokemon.abilities.map(hability => (
                <span>{hability.ability.name}</span>
              ))}</span>
          </div>
        )}
      </div>
    </>
  );
};
