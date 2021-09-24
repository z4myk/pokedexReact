import "./App.css";
import { React, useState } from "react";
import "animate.css";
import { Search } from "./components/Search";
import { CardPokemon } from "./components/CardPokemon";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {

  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=40"
  );
  const [allPokemons, setAllPokemons] = useState([]);

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
      <Header />
      <Search
        getPokemonBySearch={getPokemonBySearch}
        searchData={searchData}
        setSearchData={setSearchData}
        pokemon={pokemon}
        setPokemon={setPokemon}
      />
      <CardPokemon />
      <h3 className="text-center text-danger my-3">Pokedex</h3>
      <Pokedex
       getPokedex={getPokedex}
       allPokemons={allPokemons}
      />
      <Footer />
    </>
  );
}

export default App;
