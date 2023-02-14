
import "./index.css"

const Dashboard = (props) => {
    let data = props.data;
    let items = data.map((item) => {
        return (
            <div key={item.symbol} className="stock item">
                <p className="name">{item.name}</p>
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