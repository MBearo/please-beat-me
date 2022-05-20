import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Game } from './modules/Game'
import About from './page/About'
import Home from './page/Home'
import { clone } from 'lodash'
const globalGame = new Game({})
export default function App () {
    const [update, setUpdate] = useState(0)
    const subEvent = () => {
        console.log()
        setUpdate(update + 1)
    }

    globalGame.setSubEvent(subEvent)
    const game = clone(globalGame)
    console.log('game', game)
    return (
        <Routes>
            <Route path="/" element={<Home game={game} update={update} />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}
