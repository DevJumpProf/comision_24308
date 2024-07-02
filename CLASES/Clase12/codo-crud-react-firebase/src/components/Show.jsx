import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc}from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

/* sweet Alert */
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

export const Show  = () =>{

    //1 CONFIGURAR USESTATE (HOOK)
    const [heroes,setHeroes] = useState([])

    // 2 referenciamos a la basede datos (coleccion) de firestore
    const heroesCollection = collection (db,"heroes")

    // 3 funcion para mostrar todos los documento
    const getHeroes = async() =>{
    /*     const data = await getDocs(collection (db,"heroes")) */
        const data = await getDocs(heroesCollection)
   /*      console.log(data ); */
        setHeroes (data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
        }))
    )
    }
/*     console.log(heroes); */
// buena practica (debe ir dentro del useEffect)


//4 funcion para eliminar un documento
const deleteHeroe = async (id) =>{
    // credenciales - colecccion - como la identifico
const heroeDoc = doc (db,"heroes",id)  // heroescollection
await deleteDoc (heroeDoc)
}



    return (
        <h1>aca se muestran los registros</h1>
    )
}