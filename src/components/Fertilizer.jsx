import React, { useState } from 'react'
import "./fertilizer.css";
import Quantity from './Quantity';
import buttonChart from "../assets/Button.svg";
import FertilizerIcon from "../assets/science_2022299.png";

import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

function Fertilizer({ Mode }) {
    const data5 = [
        {
            time: 1,
            temp_min: 25,
            temp_max: 18,
        },
        {
            time: 2,
            temp_min: 26,
            temp_max: 28,
        }, {
            time: 3,
            temp_min: 5,
            temp_max: 38,
        },
    ]

    const [progress1, setProgress1] = useState(7);
    const [progress2, setProgress2] = useState(45);
    const [progress3, setProgress3] = useState(78);

    return (
        <div className='main'>
            <div className='title'>Fertilizer & Temprature prediction</div>
            <div className='bottom-fertilizer'>
                <ResponsiveContainer className="card-fertilizer" width="66%" height="75%" >
                    <div className='card-fertilizer-title'>
                        <p>Weather Prediction</p>
                        <img src={buttonChart} alt="" />
                    </div>
                    <LineChart margin={{ top: 20, left: -20, bottom: 0, right: 10 }}
                        data={data5} >
                        <Legend layout="horizontal" verticalAlign="bottom" align="right" />
                        <CartesianGrid />
                        <XAxis fontSize={10} interval={"preserveStartEnd"} />
                        <YAxis fontSize={10}></YAxis>
                        <Tooltip />
                        <Line
                            dataKey="temp_min"
                            stroke="black"
                            activeDot={{ r: 7 }}
                        />
                        <Line dataKey="temp_max" stroke="red" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                <div className="loaders">
                    <div className='progress-fertilizer-title'>
                        <p>Fertilizer Requirement <br /> Analysis</p>
                        <img src={FertilizerIcon} alt="" height={30} width={30} />
                    </div>
                    <Quantity qnty={progress1} name={"N"} Mode={Mode} />
                    <Quantity qnty={progress2} name={"P"} Mode={Mode} />
                    <Quantity qnty={progress3} name={"K"} Mode={Mode} />
                </div>
            </div>
        </div>
    )
}

export default Fertilizer