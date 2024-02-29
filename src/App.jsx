import { useState } from 'react'
import './App.css'
import {  Route, Routes, HashRouter} from "react-router-dom";
import { Homepage } from './pages/Homepage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter basename="/">

          <Routes>
            <Route path ="/"  element ={<Homepage />}/>
         </Routes>

      </HashRouter>
    </>
  )
}

export default App
