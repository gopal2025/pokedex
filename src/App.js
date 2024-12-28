import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Home from "./Components/Home";


import Pokedex from "./Components/Pokedex";
import Species from "./Components/Species";
import { Route, Routes, Link } from "react-router-dom";

export const FavouriteList = createContext();

function App() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavs) {
      setFavourites(storedFavs);
    }
  }, []);

  return (
    <div className="App">
      <FavouriteList.Provider value={{ favourites, setFavourites }}>
        <div>
          <div className="header">
            <Link to="/">
              <h1>Pokedex Lite</h1>
            </Link>
            <div className="">
             
              
              
              <Link to="/pokedex/full">
                <p>Pokedex by Gopal</p>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
           
       
            <Route path="/pokedex/:type/:id" element={<Pokedex />} />
            <Route path="/pokedex/:type" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Species />} />
          </Routes>
        </div>
      </FavouriteList.Provider>
    </div>
  );
}

export default App;
