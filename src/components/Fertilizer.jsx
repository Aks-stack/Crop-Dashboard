import React, { useState } from 'react'
import "./fertilizer.css";
import Quantity from './Quantity';

function Fertilizer({ Mode }) {
    const [progress1, setProgress1] = useState(7);
    const [progress2, setProgress2] = useState(45);
    const [progress3, setProgress3] = useState(78);

    return (
        <div className='main'>
            <div className='title'>Main Dashboard</div>

            <div className="main-content">
                <div className="loaders">
                    <Quantity qnty={progress1} name={"N"} Mode={Mode} />
                    <Quantity qnty={progress2} name={"P"} Mode={Mode} />
                    <Quantity qnty={progress3} name={"K"} Mode={Mode} />
                </div>
            </div>
        </div>
    )
}

export default Fertilizer