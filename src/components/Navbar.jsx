import React from "react";
import pokeapi from "../images/pokeapi.png";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-danger p-4">
        <div className="container-fluid">
          <a href="#/" target="_blank" className="navbar-brand">
            <img src={pokeapi} alt="pokeApi" className="pokeApiPhoto" />
          </a>
        </div>
      </nav>
    </>
  );
};
