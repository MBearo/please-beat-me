import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
export default function App () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}
