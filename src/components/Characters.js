import React from "react";

//characters es un array de componentes que se lo estoy pasando a travez de las props, estos charactres son los que obtuve mediante setcharacteres el manejador de estado en el archivo de app.js
//row es una clase de boostram que crea filas y col agrega columnas, eso por cada personaje q traigo de la peticion, card crea un formato de tarjeta de bootstrac
// map me permite iterar los componentes que le paso como props, el index lo pongo porque seria la llave digamos... va a ser 0,1,2,3,4 por cada index me crea una columna  y el item es cada uno de los personajes
//en vez de crear un archivo de estilos los creo aca mismo como propedades een este caso de las cards
const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{width: "200px"}} >
            <img src={item.image} alt="imagen de personaje" />
            <div className="card-body">
              <h5 className="card-title">{item.name} </h5>
              <hr />
              <div>
                <p> Location: {item.location.name}</p>
                <p> Especies: {item.species}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
