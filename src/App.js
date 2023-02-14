
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Stocks from './pages/Stock'
import { Routes, Route } from "react-router-dom"
import data from "./data.js"

function App() {
  console.log(data);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard data={data} />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;