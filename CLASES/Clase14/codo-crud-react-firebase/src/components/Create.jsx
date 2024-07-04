import {useState} from "react"
import {Link,useNavigate}from "react-router-dom"
import {collection, addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase"


export const Create = ()=>{
// estados
const [nombre,setNombre]=useState("")
const [apellido,setApellido]=useState("")
const [nacimiento,setNacimiento]=useState(0)
const [especialidad,setEspecialidad]=useState("")

// redireccion
const navigate = useNavigate()

//instanciar la colecccion
const heroesCollection = collection(db,"heroes")

// funcion para crear heroes
const crearHeroe = async(e)=>{
e.preventDefault()
await addDoc(heroesCollection,{
    nombre: nombre,
    apellido:apellido,
    nacimiento: Number(nacimiento),
    especialidad: especialidad
});
navigate("/")
};

return (
<div className="container">
    <div className="row">
        <div className="col">
            <h1>Crear Heroes</h1>
            <form onSubmit={crearHeroe}>

<div className="mb-3">
<label className="form-label">Nombre</label>
<input 
type="text" 
value={nombre}
onChange={(evento)=>setNombre(evento.target.value)}
className="form-control"
/>
</div>

<div className="mb-3">
<label className="form-label">Apellido</label>
<input type="text" 
value={apellido}
onChange={(evento)=>setApellido(evento.target.value)}
className="form-control"
/>
</div>

<div className="mb-3">
<label className="form-label">Nacimiento</label>
<input type="text" 
value={nacimiento}
onChange={(evento)=>setNacimiento(evento.target.value)}
className="form-control"
/>
</div>

<div className="mb-3">
<label className="form-label">Especialidad</label>
<input type="text" 
value={especialidad}
onChange={(evento)=>setEspecialidad(evento.target.value)}
className="form-control"
/>
</div>
<button type="submit" className="btn btn-primary">Crear Heroe</button>
<Link to="/">
<button className="btn btn-danger">CANCELAR</button>
</Link>
            </form>
        </div>
    </div>
</div>
)
}