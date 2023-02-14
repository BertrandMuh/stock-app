
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {


    return (
        <div id="navbar">
            <Link to="/" className="nav-menu">
                iStocks
            </Link>
            <Link to="/stocks" className="nav-menu">
                Stocks
            </Link>
            <Link to="/about" className="nav-menu">
                About
            </Link>
        </div>
    )
}

export default Nav