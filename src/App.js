import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import {useState} from "react"
import Peliculas from "./peliculas"
import Cabecera from "./cabecera"
import Footer from "./footer"
import Cartelera from "./cartelera"
import Pelicula1 from "./pelicula1"


function App() {

  let [peliculas,setPeliculas] = useState(Peliculas)
 

  return(<BrowserRouter>
  <Cabecera/>
    <Route exact path="/"></Route>
    <Route exact path="/cartelera">
  <Cartelera/>
  </Route>
  <Route exact path="/pelicula1">
  <Pelicula1 titulo={peliculas[0].titulo} cartel={peliculas[0].cartel} sinopsis={peliculas[0].sinopsis}/>
  </Route>
  <Route exact path="/pelicula2">
  <Pelicula1 titulo={peliculas[1].titulo} cartel={peliculas[1].cartel} sinopsis={peliculas[1].sinopsis}/>
  </Route>
  <Route exact path="/pelicula3">
  <Pelicula1 titulo={peliculas[2].titulo} cartel={peliculas[2].cartel} sinopsis={peliculas[2].sinopsis}/>
  </Route>
  <Route exact path="/pelicula4">
  <Pelicula1 titulo={peliculas[3].titulo} cartel={peliculas[3].cartel} sinopsis={peliculas[3].sinopsis}/>
  </Route>
  <Footer/>
  </BrowserRouter>)
}

export default App;
