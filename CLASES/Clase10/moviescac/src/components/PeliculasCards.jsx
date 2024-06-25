
import {Link} from "react-router-dom"
import "./PeliculasCard.css"
export const PeliculasCards = ({peliculasMap})=>{

    const URLIMG = `https://image.tmdb.org/t/p/w300${peliculasMap.poster_path}`


    return(
       <li className="peliculasCard">
        <Link to={`/pelicula/${peliculasMap.id}`}>
        <img className="peliculaImage" src={URLIMG} alt={peliculasMap.title}/>
        <small>{peliculasMap.title}</small>
        </Link>
       </li>
    )
}