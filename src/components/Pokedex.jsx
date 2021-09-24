import React, { useState, useEffect } from "react";

export const Pokedex = (props) => {


  useEffect(() => {
    props.getPokedex();
  }, []);

  return (
    <>
  
    <div className="d-flex justify-content-between flex-wrap mb-4">
      {props.allPokemons.map((pokedex) => (
        <div key={pokedex.name}>
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
                <p className="text-center">#{pokedex.id}</p>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>
  );
};
