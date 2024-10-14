import { useState } from 'react'
import './App.css'
import { Home } from "./components/Home.jsx"
import { Game } from "./components/Game.jsx"

function App() {
    const [name, setName] = useState("")
    const [theNumber, setTheNumber] = useState(0)
    return (
        <>

            <Home name={name} setName={setName}/>

            <Game name={name}/>

        </>
    )
}

export default App
