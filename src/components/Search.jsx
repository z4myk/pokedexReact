import React from "react";
import 'animate.css';
export const Search = (props) => {
 

  const handleInputChange = (e) => {
    props.setSearchData(e.target.value);
  };

  const onClick = () => {
    if(props.searchData.length === 0 || props.searchData.trim() === "" ){
      alert('El campo esta vacio')
    }else{
      try {
        props.getPokemonBySearch(props.searchData);
      } catch (err) {
        console.log(err);
      }
      
    }



  };
  console.log(props.pokemon);

  return (
    <>
      {!props.searchData ? (
        <div className="alert alert-warning w-100 text-center">
          Ingrese el nombre de un pokemon
        </div>
      ) : null}
      <div className="container divInput">
      <input
        type="text"
        placeholder="Nombre del pokemon"
        className="form-control w-100 border-danger mt-5 animate__animated animate__fadeInLeftBig"
        onChange={handleInputChange}
      />
      {props.loading ? (
        <div className="alert alert-danger w-100 text-center">
          El nombre ingresado no es valido
        </div>
      ) : null}
      <div>
        <button className="btn btn-success w-100 animate__animated animate__fadeInLeftBig" onClick={onClick}>
          Buscar
        </button>

      </div>
      </div>
      <div className="container d-flex justify-content-center">
        {props.pokemon && (
          <div className="cardbodySearch animate__animated animate__fadeInLeftBig ">
            <div className="redondelPokemon">
              <span className="mx-4">#{props.pokemon.id}</span>
              <div className="d-flex">
                <img
                  src={props.pokemon.sprites.front_default}
                  alt={props.pokemon.name}
                  className="pokemonphoto"
                />
                <img
                  src={props.pokemon.sprites.back_default}
                  alt={props.pokemon.name}
                  className="pokemonphoto"
                />
              </div>
            </div>

            <span className="my-3 text-center">
              Nombre: {props.pokemon.name}
            </span>
            <hr className="text-danger" />
            <span className="text-center">Peso: {props.pokemon.weight}kg</span>
            <br />
            <span className="text-center">
              Especie:{" "}
              {props.pokemon.types.map((type) => (
                <span key={type.type.name}>{type.type.name}</span>
              ))}{" "}
            </span>
            <br />
            <span className="text-center">
              Habilidad:{" "}
              {props.pokemon.abilities.map((hability) => (
                <span key={hability.ability.name}>{hability.ability.name}</span>
              ))}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
