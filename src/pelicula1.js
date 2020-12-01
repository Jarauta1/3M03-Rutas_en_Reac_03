
function Pelicula1 (props) {

    return (<>
    <h1>{props.titulo}</h1>
    <img src={props.cartel} width="50"/>
    <p>{props.sinopsis}</p>
    </>)

}

export default Pelicula1;