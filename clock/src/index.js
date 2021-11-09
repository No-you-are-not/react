import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clock (){
    const [time, setTime] = useState(new Date());
    const [check, setCheck] = useState(true)

    useEffect(() => {
       let timerId
        if (check){
            timerId = setInterval(() => setTime(new Date()), 1000)
        }
        return  () => {
            clearInterval(timerId);
        }
    }, [check])

    return(
        <div className="container">
            <h2 className="timer">{time.toLocaleTimeString()}</h2>
            <button className="stop button" onClick={() => setCheck(false)}>Stop</button>
            <button className="continue button" onClick={() => setCheck(true)}>Continue</button>
        </div>
    )
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)