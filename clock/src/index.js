import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()}
        this.stop = this.stop.bind(this)
        this.continue = this.continue.bind(this)
    }
    componentDidMount() {
      this.timerId =   setInterval(
            () => this.setState({date: new Date().toLocaleTimeString()}),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    stop(){
        clearInterval(this.timerId)
    }
    continue(){
        this.timerId =   setInterval(
            () => this.setState({date: new Date().toLocaleTimeString()}),
            1000
        );
    }
    render() {
        return (
            <div className="container">
                <h2 className="timer">{this.state.date}</h2>
                <button className="stop button" onClick={this.stop}>Stop</button>
                <button className="continue button" onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

function App(){
    return (
        <div>
            hi puss
        </div>
    )
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)