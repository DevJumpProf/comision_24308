import React from 'react'
import ReactDOM from 'react-dom/client'
import Boton  from "./Boton"
import './index.css'
import Card from "./Card"

ReactDOM.createRoot(document.getElementById('root')).render(
<> {/* // fragment */}
<Boton numero={1}/>
<Boton numero={2}/>
<Boton numero={3}/>
<Boton numero={4}/>
<Card 
apellido="Messi"
nacimiento = {1987} 
clubes={["Newells ","Barcelona ","PSG ", " Inter MIAMI"]}
mundial={true}
late={false}
/>
<Card 
apellido="Ronaldo"
nacimiento = {1984} 
clubes={["S.Lisboa ","Manchester ","R.Madrid ","Juventus ","Al-Nasar"]}
mundial={false}
late={true}
/>
</>
)
