import React from 'react';

function ApiCallData(props){
    return ( 
        props.stockData.map(items =>
            <div>
              <h1>{items.longName}</h1>
              <p>this acronum is: {items.mic}</p>
            </div>
            )
    )
}
export default ApiCallData;

