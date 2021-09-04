import React, { useState, useEffect } from "react";

export const Pokedex = () => {
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokedex = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <>
    <div className="d-flex justify-content-between flex-wrap">
      {allPokemons.map((pokedex) => (
        <div key={pokedex.name} className="">
            <div className="cardbody">
              <div className="redondelPokemon">
                <img
                  src={pokedex.sprites.front_default}
                  alt={pokedex.name}
                  className="pokemonphoto"
                />
              </div>
              <div>
                <p className="my-3 text-center">Nombre: {pokedex.name}</p>
                <hr />
                <p className="text-center">Peso: {pokedex.weight}kg</p>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>
  );
};
