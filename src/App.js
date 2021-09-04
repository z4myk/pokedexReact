import "./App.css";
import { React } from "react";
import "animate.css";
import { Search } from "./components/Search";
import { CardPokemon } from "./components/CardPokemon";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <CardPokemon />
      <Pokedex />
      <Footer />
    </>
  );
}

export default App;
