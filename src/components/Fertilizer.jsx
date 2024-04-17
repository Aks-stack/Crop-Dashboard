import React, { useEffect, useState } from 'react'
import "./fertilizer.css";
import Quantity from './Quantity';
import buttonChart from "../assets/Button.svg";
import FertilizerIcon from "../assets/science_2022299.png";
import { IoRainyOutline } from "react-icons/io5";
import Sunny from "../assets/sun.png";
import Rain from "../assets/rain.png";
import Cloud from "../assets/cloud.png";



import { Line, BarChart, Tooltip, Legend, LineChart, CartesianGrid, XAxis, ResponsiveContainer, YAxis, Bar } from "recharts";
import axios from 'axios';
import moment from 'moment';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function Fertilizer({ Mode, latlong }) {

    const [weather, setWeather] = useState([]);
    const [chartData, setChartdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axios.post("http://192.168.0.105:5000/api/predict-weather", {
                    latitude: latlong.latitude,
                    longitude: latlong.longitude
                }, {
                    headers: { "Content-Type": "application/json" } // Content-Type might be required by your backend
                });
                console.log(data);
                setWeather(data.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        getData();

        const getRain = async () => {
            const resp = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=rain_sum&past_days=2");
            const data = resp.data.daily

            const dataset = []
            for (let i = 0; i < data.rain_sum.length; i++) {
                const currrObj = {
                    name: data.time[i],
                    y: data.rain_sum[i],
                    x: (new Date(data.time[i])).getDate()
                }

                dataset.push(currrObj)
            }

            setChartdata(dataset)
            // setTimeout(() => console.log(dataset), 200)

        }
        getRain();

    }, []);

    const [progress1, setProgress1] = useState(7);
    const [progress2, setProgress2] = useState(45);
    const [progress3, setProgress3] = useState(78);

    const newArr = chartData.map((value) => value.y)
    console.log(newArr);

    return (
        <div className='main'>
            <div className='title'>Fertilizer & Temperature prediction</div>
            <div className='bottom-fertilizer'>
                <div className="info">
                    <ResponsiveContainer className="card-fertilizer" width="100%" height="60%" >
                        {/* <BarChart width={100} height={200} data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                tick={{ fontSize: 12 }}
                                dataKey="x"
                                type="number"
                                ticks={[-1, 5]}
                                domain={[12, 22]}
                            />
                            <YAxis />
                            <Bar dataKey="y" barSize={32} label={<Label />} fill="#8884d8" />
                            {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> 
                        </BarChart> */}
                        <LineChart width={500} height={300} data={chartData}>
                            <XAxis dataKey="x" domain={[12, 22]} tick={{ fontSize: 12 }}
                                type="number" label={{ value: "Days", position: "insideBottomRight", dy: 10 }} />
                            <YAxis ticks={[-0.1, 8]} />
                            <Tooltip />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Line type="monotone" label={<Label />} dataKey="y" stroke="#8884d8" />
                        </LineChart>


                    </ResponsiveContainer>
                    <div className="weather">
                        {
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
                        }
                    </div>
                </div>
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