import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
const firstUrl = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setcharacters] = useState([]);
  //crea un estado para los personajes e inicia el estado con array vacio ------------> pq se que los pj la api me los devuelve en un array
  const [info, setInfo] = useState({});
  //crea un estado para los links de las paginas e inicia el estado con un objeto vacio ------------> pq se que las url la api me los devuelve en un objeto
  async function getData(url) {
    try {
      let res = await fetch(url);
      let json = await res.json();

      setcharacters(json.results);
      //llena el estado de characteres con lo que viene en el apartado results de la api
      setInfo(json.info);
      //llena el estado de info cn las propiedes con lo que viene  en el apartado info de la api
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(firstUrl);
  }, []);
  //a travez de useEffect hago que cuando se renderice por primera vez el comoponente principal app.... haga una llamada a a la api..... (la llamada la hace una sola vez pq el array esta vacio) como tiene un array de dependencias vacios se va a ajecutar una sola vez


  const onPrevius = ()=>{
  getData(info.prev)}
 

  const onNext = ()=> {
  getData(info.next)}
  //estas funciones que cree lo que van a hacer es realizar una nueva llamada a la api pero con la nueva URL

  return (
    <>
      <NavBar />
      {/* estoy agregando un componnete llamado pagination que tiene 4 propiedades
      la primer propiedad "prev" esta compuesta por el link "prev" que vienen en el objeto info.
      Este objeto info se lleno de informacion a travez de que su manejador setinfo lo "lleno" con los valores que venian de la api a la cual le hize una peticion con la funcion asincrona getData */}
      <Pagination
        prev={info.prev}  
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
        
      />
      <div className="container mt-5">
        <Characters characters={characters} /> 
        {/* estoy agregando un componente llamado Characters
         quien tendra una propiedad llamada character 
         que recibe al array character  */}
      </div>
      <Pagination />
    </>
  );
}



export default App;

//   fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//   .then((json) => {
//   console.log(json);})
//
