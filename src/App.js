import './index.css'
import data from './data/events'; 
import Card from './componentes/Card';
import BotonCambiar from './componentes/BotonCambiar';
import {useState} from "react";
import React from 'react';


function App() {
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  let siguiente = () => {
    if(numeroACambiar < data.length -1){
      setNumeroACambiar (++numeroACambiar);
    }else{
      numeroACambiar(0);
    }
  };
  let anterior = () => {
    if(numeroACambiar > 0){
      setNumeroACambiar (--numeroACambiar)
    }else{
      setNumeroACambiar(data.length -1)
    }
  };
  let mostrar = () =>{
    setMostrarOcultar(!mostrarOcultar);
  };
  return (
    <div className="container">
      <div className="card">
        <h2 className="card__category">{data[numeroACambiar].category}</h2>
        <figure className="card__image">
          <img
          src={data[numeroACambiar].image}
          alt=""
          />
        </figure>
        {mostrarOcultar ? (
        <>
         <Card nombre={data[numeroACambiar].name} descripcion={data[numeroACambiar].description}/>
         <div className="card__buttons">
            <BotonCambiar nombre="Anterior" estilos="btn btn--left" accion={anterior}/>
            <BotonCambiar nombre= "Ocultar" estilos="btn btn--up" accion={mostrar} />
            <BotonCambiar nombre="Siguiente" estilos="btn btn--right" accion={siguiente} />
         </div>
        </>
        ) : (
          <BotonCambiar nombre="Mostrar" estilos="btn btn--right" accion={mostrar} />
        )}
      </div>
    </div>
  )
}

export default App;

