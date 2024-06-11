
import "./Card.css"

const Card = ({ apellido, nacimiento, clubes, mundial, late }) => {
  /* 
    const Card = ({apellido= "por defecto",nacimiento,clubes,mundial,late}) =>{ */

  let color = mundial ? "dorado" : "plateado";
  return (
    <>
      {/*   background-color = css
        backgroundColor  =JSX */}
      {/*      <h2 style={{backgroundColor:mundial?"Gold":"Silver"}}>{apellido}</h2> */}
   {/*    <h2 style={{ backgroundColor: color }}>{apellido}</h2> */}
   <h2 className={color}>{apellido}</h2>

      <small>{nacimiento}</small>
      <p>{clubes}</p>
      <p>{mundial ? "Gano un mundial🤩" : "Sigue Participando🥶"}</p>
      <p>{late ? "Late ✔️" : "Nola ❌"}</p>
    </>

    //  comentario
    /*    comentario multilinea */
  );
};

export default Card;
