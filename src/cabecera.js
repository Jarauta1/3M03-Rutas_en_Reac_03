import {Link} from "react-router-dom"
import Peliculas from "./peliculas"
import {useState} from "react"

function Cabecera () {

    let [peliculas,SetPeliculas] = useState(Peliculas)

    let mostrarPeliculas = peliculas.map(pelicula=>{
        return (<>
        <li><Link to="/">{pelicula.titulo}</Link></li>
        </>)
    })
 
    return (<>
    <h1>Rutas en React</h1>
    <p>Estás en el ejercicio 3</p>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cartelera">Cartelera</Link></li>
        <li><Link to="/pelicula1">{peliculas[0].titulo}</Link></li>
        <li><Link to="/pelicula2">{peliculas[1].titulo}</Link></li>
        <li><Link to="/pelicula3">{peliculas[2].titulo}</Link></li>
        <li><Link to="/pelicula4">{peliculas[3].titulo}</Link></li>
           
    </ul>
    </>)
}

export default Cabecera;