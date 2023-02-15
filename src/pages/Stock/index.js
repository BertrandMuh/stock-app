

import "./index.css"

const Stocks = (props) => {
    console.log(props.stock);

    const elements = props.stock.map((item) => {

        return (
            <div key={item.symbol} id="stock-container">
                <strong id="name">{item.name} ({item.symbol})</strong>
                <div id="price">
                    <strong>Last price : </strong>
                    <p>{item.lastPrice}</p>
                </div>
                <div id="open">
                    <strong>Open : </strong>
                    <p>{item.open}</p>
                </div>
                <div id="high">
                    <strong>High : </strong>
                    <p>{item.high}</p>
                </div>
                <div id="low">
                    <strong>Low : </strong>
                    <p>{item.low}</p>
                </div>
                <div id="change">
                    <strong>Change : </strong>
                    <p>{item.change}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {elements}
        </div>
    )
}

export default Stocks