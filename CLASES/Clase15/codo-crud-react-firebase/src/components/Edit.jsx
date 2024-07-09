import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const Edit = () => {
  // estados
  // estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nacimiento, setNacimiento] = useState(0);
  const [especialidad, setEspecialidad] = useState("");

  // re direccion

  const navigate = useNavigate();

  // capturo el Id
  const { id } = useParams();

  // funcion que actualiza un documento en firestore
  const updateHeroe = async (e) => {
    e.preventDefault();
    // como represento al heroe que quiero editar?
    const heroeDoc = doc(db, "heroes", id);
    const data = {
      nombre: nombre,
      apellido: apellido,
      nacimiento: Number(nacimiento),
      especialidad: especialidad,
    };
    await updateDoc(heroeDoc, data);
    navigate("/");
  };


  // trar el/la heroe/ heroina cuando cargue el componente Edit

  useEffect(()=>{
  /* funcion que trae un doc por su id */
  const getHeroeById = async (id) => {
    const heroeDoc = await getDoc(doc(db, "heroes", id));
    if (heroeDoc.exists()) {
      setNombre(heroeDoc.data().nombre);
      setApellido(heroeDoc.data().apellido);
      setNacimiento(heroeDoc.data().nacimiento);
      setEspecialidad(heroeDoc.data().especialidad);
    } else {
      console.error("No existe el heroe que buscas");
    }
  };
  getHeroeById (id)
  },[])

return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Crear Heroes</h1>
                <form onSubmit={updateHeroe}>
    
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
    <button type="submit" className="btn btn-primary">Editar Heroe</button>
    <Link to="/">
    <button className="btn btn-danger">CANCELAR</button>
    </Link>
                </form>
            </div>
        </div>
    </div>
)
}