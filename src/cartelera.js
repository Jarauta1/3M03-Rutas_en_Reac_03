import Peliculas from "./peliculas"
import {useState} from "react"

function Cartelera () {

    
  let [peliculas,SetPeliculas] = useState(Peliculas)

  let mostrarPeliculas = peliculas.map(pelicula=>{
      return (<>
      <h3>{pelicula.titulo}</h3>
      <img src={pelicula.cartel} width="50"/>
      </>)
  })

  return (<>{mostrarPeliculas}</>)
}

export default Cartelera;