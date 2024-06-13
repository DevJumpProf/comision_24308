/* 
exportaciones */

/* export const Counter = () =>{
    return (
        <h1>Este es un el componente contador</h1>
    )
}

export const Counter2 = () =>{
    return (
        <h1>Este es otro un el componente contador</h1>
    )
} */

    import {useState,useEffect} from "react"


 export const Counter = () =>{

    const [contador,setContador] = useState(0)

useEffect(()=>{
    alert ("cambio el contador")
},[contador])

    return (
        <>
        <p>Contador:{contador}</p>
       <button onClick={()=>setContador(contador+1)}>Aumentar</button>
       <button onClick={()=>setContador(contador-1)}>Restar</button>
</>
    )
}