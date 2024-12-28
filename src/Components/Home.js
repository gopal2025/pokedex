import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../Assets/Home/homeImg";
import Favourites from "./Favourites";

export default function Home() {
  return (
    <>
      <Favourites />
      <h1>
        <u>Welcome to Please Select Pokemon!</u>
      </h1>
  
      <div className="homeSelection">
    
        
        <Link
          to="/pokedex/full"
          state={{ source: "None", title: "Searching entire Pokédex" }}
        >
          <div className="selectionContainer">
            <h1>POKMON LIST</h1>
            <div id="imageContainer">
              <img src={homeImg.pokedex} alt="pokedex" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
