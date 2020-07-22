import React from 'react';

class Main extends React.Component { 
   render(){
    return(
        <div> 
            <h3>Stock Data for Today</h3>
            <ul>
                <li>Microsoft: {this.props.MicrosoftValue}</li>
                <li>Twitter: {this.props.TwitterValue}</li>
                <li>Amazon: {this.props.AmazonValue}</li>
                <button onClick={this.props.increase}>Increase Stock Value</button>
                <button onClick={this.props.decrease}>Decrease Stock Value</button>
                <button onClick={this.props.jumble}>Jumble Stock Value</button>
            </ul>

            <ul>
                {
                    this.props.Values.map((items)=>
                    <li>{items.company}: {items.value}</li>
                    )
                }
                <button onClick={this.props.increase2}>Increase Stock Value</button>
                <button onClick={this.props.decrease2}>Decrease Stock Value</button>
                <button onClick={this.props.jumble2}>Jumble Stock Value</button>
            </ul>
        </div>
    )
   }
}

export default Main;