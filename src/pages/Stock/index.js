

import "./index.css"

const Stocks = (props) => {
    console.log(props.stock);

    const elements = props.stock.map((item) => {
        let percentChange = (item.change / item.open * 100).toFixed(2);
        let pTag
        if (percentChange > 0) {
            pTag = <p className="change positive">{item.change.toFixed(4)} (+{percentChange}%)</p>
        }
        else if (percentChange < 0) {
            pTag = <p className="change negative">{item.change.toFixed(4)} ({percentChange}%)</p>
        }
        else {
            pTag = <p className="change neutral">{item.change.toFixed(4)} ({percentChange}%)</p>
        }

        return (
            <div key={item.symbol} id="stock-container">
                <h3 id="name">{item.name} ({item.symbol})</h3>
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
                    {pTag}
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