
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Stocks from './pages/Stock'
import { Routes, Route } from "react-router-dom"
import data from "./data.js"
import { useState } from "react"

function App() {
  const [stock, setStock] = useState([])
  const handleStockClick = (el) => {

  }
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard data={data} setStock={setStock} />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stocks stock={stock} />} />
      </Routes>
    </div>
  );
}

export default App;