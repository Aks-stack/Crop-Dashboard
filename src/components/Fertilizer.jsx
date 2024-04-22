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


import { Line, BarChart, Tooltip, Legend, LineChart, CartesianGrid, XAxis, ResponsiveContainer, YAxis, Bar } from "recharts";
import axios from 'axios';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import Loader2 from './Loader2';
import { Chart } from "react-google-charts";
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function Fertilizer({ Mode, latlong }) {
    const [serverip, setServerip] = useState(localStorage.getItem("server"));
    const [weather, setWeather] = useState([]);
    const [chartData, setChartdata] = useState([]);
    const [dataset, setDataset] = useState([["Day", "Rainfall"]]);

    const { state } = useLocation();
    const [spinner, setSpinner] = useState(false);

    console.log("State ", state)

    const options = {
        width: "450px",
        curveType: "",
        legend: {
            position: "bottom",
            textStyle: { color: Mode ? 'grey' : 'black' }
        },
        chartArea: { left: "10%", width: "85%", height: "70%" },
        backgroundColor: Mode ? "#111C44" : 'white',
        hAxis: {
            baselineColor: Mode ? 'grey' : 'black',
            // gridlineColor: Mode?'white':'black',
            textStyle: { color: Mode ? 'grey' : 'black' }
        },
        vAxis: {
            baselineColor: Mode ? 'grey' : 'black',
            // gridlineColor: Mode?'white':'black',
            textStyle: { color: Mode ? 'grey' : 'black' }
        }
    };

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
                console.log(data);
                setWeather(data.data.data);
                setSpinner(false);

            } catch (error) {
                console.error(error);
            }

        };
        getData();

        // const getRain = async () => {
        //     const resp = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=rain_sum&past_days=2");
        //     const data = resp.data.daily

        //     // const dataset = [["Age", "Weight"],]
        //     // for (let i = 0; i < data.rain_sum.length; i++) {
        //     //     // const currrObj = {
        //     //     //     // name: data.time[i],
        //     //     //     y: data.rain_sum[i],
        //     //     //     x: (new Date(data.time[i])).getDate()
        //     //     // }

        //     //     dataset.push([(new Date(data.time[i])).getDate(), data.rain_sum[i]])
        //     // }
            
        //     setChartdata()
        //     console.log('rainfall',chartData);

        //     // setTimeout(() => console.log(dataset), 200)
        // }
        // getRain();
        const getRain = async () => {
            const resp = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=rain_sum&past_days=2");
            const data = resp.data.daily
            const { rain_sum } = data;

            const rainfall = rain_sum.map((item, index) => {
                return [(new Date(data.time[index])).getDate(), item]
            })
            setDataset([...dataset, ...rainfall])
            console.log("Charts", dataset);
        }
        getRain();

    }, []);

    const [progress1, setProgress1] = useState(17);
    const [progress2, setProgress2] = useState(28);
    const [progress3, setProgress3] = useState(23);

    const newArr = chartData.map((value) => value.y)
    // console.log(newArr);

    return (
        <div className='main'>
            <div className='title'>Fertilizer & Temperature prediction</div>
            <div className='bottom-fertilizer'>
                <div className="info">
                    <div className="card-fertilizer">
                    <Chart
                        className='chart'
                        chartType="Bar"
                        style={{ width: "100%" }}
                        data={dataset}
                        options={options}
                        />
                        </div>
                    <div className="weather">
                        {
                            spinner ? <Loader2 /> : (weather && weather.filter((item) => {

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
                                }))
                        }
                    </div>
                </div>
                <div className="loaders">
                    <div className='progress-fertilizer-title'>
                        <p>Fertilizer Requirement <br /> Analysis for <u>{state?.name}</u></p>
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