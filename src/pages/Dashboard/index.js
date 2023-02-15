
import { Link } from "react-router-dom";
import "./index.css"

const Dashboard = (props) => {

    let data = props.data;

    const handleStockClick = (e) => {
        props.setStock(props.data.filter(item => item.symbol === e.target.id))
    }

    let items = data.map((item) => {
        let route = `/stocks/${item.symbol}`
        return (
            <div key={item.symbol} className="stock item">
                <Link to={route} data={item.symbol}
                    id={item.symbol} className="name"
                    onClick={handleStockClick}>
                    {item.name} - {item.symbol}
                </Link>
                <p className="price">{item.lastPrice}</p>
                <p className="change">{item.change}</p>
            </div>
        )
    }
    )
    return (
        <div>
            <h1>Home Page</h1>
            <div className="stock container">
                <h3 className="stock-column name">Company Name</h3>
                <h3 className="stock-column price">Price</h3>
                <h3 className="stock-column change">Change</h3>
            </div>
            {items}
        </div>
    )
}

export default Dashboard