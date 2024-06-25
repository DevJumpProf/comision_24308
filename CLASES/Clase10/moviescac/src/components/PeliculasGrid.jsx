import {PeliculasCards} from "./PeliculasCards"
import {getUrl} from "../utils/conexionAPI.js"
import{useState,useEffect} from "react"

import "./PeliculasGrid.css"

export const PeliculasGrid=()=>{

    const [peliculas,setPeliculas] = useState([])

    useEffect(()=>{
        getUrl("/discover/movie").then((data)=>{
  /*    console.log(data.results)   */
   setPeliculas(data.results)
        })
    },[])
    return (
        <ul className="peliculasGrid">
            {peliculas.map((pelicula)=>(
    <PeliculasCards key={pelicula.id} peliculasMap={pelicula} />
            ))}
        </ul>
    )
}