import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Show} from "./components/Show"
import {Create} from "./components/Create"


export const App = () =>{
return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Show/>}  />
        <Route path= "/create" element = {<Create/>}/>
        <Route path= "/edit/:id" element = "aca se editan los registros"/>
      </Routes>
    </BrowserRouter>
  </div>
)
}