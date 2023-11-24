import React from "react";
import Contenido from "./components/Contenido";
import "./App.css";

const App = () => {
  return (
    <div className  ="container">
      <Contenido imagen={'img/play-station.png'} titulo={'Ready Player One'} parrafo={'Comienza el juego'} color={'#1d2261'} colorTexto={'#4a63b4'}/>
      <Contenido imagen={'img/estrella-de-la-muerte.png'} titulo={'Star Wars'} parrafo={'Guerra de las galaxias'} color={'#6a2674'} colorTexto={'#1d2261'}/>
      <Contenido imagen={'img/proteger.png'} titulo={'Avengers'} parrafo={'Infinity War'} color={'#4a63b4'} colorTexto={'#6a2674'}/>
    </div>
  )
}

export default App;