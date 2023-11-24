import React from "react";

const Contenido = ({ titulo, parrafo, color, colorTexto, imagen}) => {
  return (
    <div className="contenido" style={{backgroundColor: color}}>
      <img src={imagen} alt="" width={50} />
      <h1 style={{color: colorTexto}}>{titulo}</h1>
      <p>{parrafo}</p>
    </div>
  );
};


export default Contenido;