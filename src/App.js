import "./App.css";
import { React, useState } from "react";
import "animate.css";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Footer } from "./components/Footer";

function App() {

  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=40"
  );
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [pokemon, setPokemon] = useState("");
 const [loading, setLoading] = useState(false);
  
  const getPokemonBySearch = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchData}`;
    try {
      const respuesta = await fetch(url);
      if(respuesta.status === 200){
        const data = await respuesta.json();
        setPokemon(data);
      }
      else if(respuesta.status === 404){
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 1500)

      }
    } catch (err) {
      console.log(err);
    }
  };


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


  return (
    <>
      <Navbar />
      <Search
        loading={loading}
        setLoading={setLoading}
        getPokemonBySearch={getPokemonBySearch}
        searchData={searchData}
        setSearchData={setSearchData}
        pokemon={pokemon}
        setPokemon={setPokemon}
      />
    <div className="container">
      <Pokedex
       getPokedex={getPokedex}
       allPokemons={allPokemons}
      />

    </div>
      <Footer />
    </>
  );
}

export default App;
