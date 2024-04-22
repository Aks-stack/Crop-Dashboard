import React, { useEffect, useState } from 'react'
import "./fertilizer.css";
import Quantity from './Quantity';
import buttonChart from "../assets/Button.svg";
import FertilizerIcon from "../assets/science_2022299.png";
import { IoRainyOutline } from "react-icons/io5";
import Sunny from "../assets/sun.png";
import Rain from "../assets/rain.png";
import Cloud from "../assets/cloud.png";
import Loader from './Loader';
import Slider from "react-slick";

// import "./slick-carousel/slick/slick.css";
// import "./slick-carousel/slick/slick-theme.css";


import { Line, BarChart, Tooltip, Legend, LineChart, CartesianGrid, XAxis, ResponsiveContainer, YAxis, Bar } from "recharts";
import axios from 'axios';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import Loader2 from './Loader2';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function Fertilizer({ Mode, latlong }) {
    const [serverip, setServerip] = useState(localStorage.getItem("server"));
    const [weather, setWeather] = useState([]);
    const [chartData, setChartdata] = useState([]);
    const [dataset, setDataset] = useState([["Day", "Rainfall"]]);

    const { state } = useLocation();
    const [spinner, setSpinner] = useState(false);

    // console.log("State ", state)

    useEffect(() => {
        const getData = async () => {
            try {
                setSpinner(true);
                const data = await axios.post(`http://${serverip}/api/predict-weather`, {
                    latitude: latlong?.latitude,
                    longitude: latlong?.longitude
                }, {
                    headers: { "Content-Type": "application/json" } // Content-Type might be required by your backend
                });
                // console.log(data);
                setWeather(data.data.data);
                setSpinner(false);

            } catch (error) {
                console.error(error);
            }

        };
        getData();

    }, []);

    const [progress1, setProgress1] = useState(state?.n);
    const [progress2, setProgress2] = useState(state?.p);
    const [progress3, setProgress3] = useState(state?.k);

    const newArr = chartData.map((value) => value.y)
    // console.log(newArr);



    return (
        <div className='main'>
            <div className='title'>Fertilizer & Temperature prediction</div>
            <div className='bottom-fertilizer'>
                <div className="info">
                    <ResponsiveContainer className="card-fertilizer" width="100%" height="60%" >
                        <LineChart width={500} height={300} data={chartData}>
                            <XAxis dataKey="x" domain={[12, 22]} tick={{ fontSize: 12 }}
                                type="number" label={{ value: "Days", position: "insideBottomRight", dy: 10 }} />
                            <YAxis ticks={[-0.1, 8]} type="number" />
                            <Tooltip />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Line type="monotone" label={<Label />} dataKey="y" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="weather">
                        {
                            spinner ? <Loader2 /> : (

                                weather && weather.filter((item) => {

                                    const date = new Date(item.time);
                                    return true
                                }).
                                    map((val, index) => {
                                        const date = new Date(val.time);
                                        return (
                                            <div className="weather-card" key={index}>
                                                <p>{daysOfWeek[date.getDay()].substring(0, 3)}</p>
                                                <img src={newArr[index] > 0.5 ? newArr[index] > 2.5 ? Rain : Cloud : Sunny} alt="" height={50} />
                                                <p className='text-nowrap'>Max - {val.tmax.toFixed(2)}&deg;C</p>
                                                <p className='text-nowrap'>Avg - {val.tmean.toFixed(2)}&deg;C</p>
                                                <p className='text-nowrap'>Min - {val.tmin.toFixed(2)}&deg;C</p>
                                            </div>
                                        )
                                    })

                            )
                        }
                    </div>

                </div>
                <div className="loaders" >
                    <div className='progress-fertilizer-title'>
                        <p>Fertilizer Requirement <br /> Analysis for <u>{state?.name}</u></p>
                        <img src={`/crops/${state?.name}.jpg`} alt="" height={50} width={50} />
                    </div>
                    <Quantity qnty={progress1} name={"N"} Mode={Mode} />
                    <Quantity qnty={progress2} name={"P"} Mode={Mode} />
                    <Quantity qnty={progress3} name={"K"} Mode={Mode} />
                </div>
            </div>
        </div >
    )
}

const Label = props => {
    const { x, y, value } = props;

    return (
        <text
            x={x}
            y={y}
            dx={"2%"}
            dy={"-1%"}
            fontSize="15"
            fontWeight="bold"
            fill={"#181818"}
            textAnchor="left"
        >
            {value}
        </text>
    );
};

export default Fertilizer