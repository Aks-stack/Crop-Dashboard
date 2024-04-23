import React, { useEffect, useRef, useState } from 'react'
import "./fertilizer.css";
import Quantity from './Quantity';
import Sunny from "../assets/sun.png";
import Rain from "../assets/rain.png";
import Cloud from "../assets/cloud.png";
import Loader from './Loader';
import Nitrogen from '../assets/nitrogen.png';
import Phosphorus from '../assets/Phosphorus.png';
import Potassium from '../assets/Potassium.png';

import LottieCat from "../assets/Animation - 1713784715836.json";

import { Line, BarChart, Tooltip, Legend, LineChart, CartesianGrid, XAxis, ResponsiveContainer, YAxis, Bar } from "recharts";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader2 from './Loader2';
import { Chart } from "react-google-charts";
import Lottie from 'lottie-react';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Fertilizer({ Mode, latlong }) {
    const [serverip, setServerip] = useState(localStorage.getItem("server"));
    const [weather, setWeather] = useState([]);
    const [chartData, setChartdata] = useState([]);
    const [dataset, setDataset] = useState([["Day", "Rainfall"]]);

    const { state } = useLocation();
    const [spinner, setSpinner] = useState(true);

    const options = {
        width: "450px",
        curveType: "ColumnChart",
        legend: {
            position: 'top', alignment: 'end',
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
                // console.log(data);
                setWeather(data.data.data);
                setSpinner(false);

            } catch (error) {
                console.error(error);
            }

        };
        getData();

        const getRain = async () => {
            const resp = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=rain_sum&past_days=2");
            const data = resp.data.daily
            const { rain_sum } = data;

            const rainfall = rain_sum.map((item, index) => {
                return [(new Date(data.time[index])).getDate(), item]
            })
            setDataset([...dataset, ...rainfall])
            console.log("Charts :", dataset);
        }
        getRain();

    }, []);

    const [progress1, setProgress1] = useState(state?.n);
    const [progress2, setProgress2] = useState(state?.p);
    const [progress3, setProgress3] = useState(state?.k);

    const [qnty, setQnty] = useState(false);

    const [npercent, setNpercent] = useState();
    const [ppercent, setPpercent] = useState();
    const [kpercent, setKpercent] = useState();


    const newArr = chartData.map((value) => value.y)
    // console.log(newArr);

    const handleQnty = () => {
        let N = state?.n;
        let P = state?.p;
        let K = state?.k;
        const thikness = 0.15;
        const density = 1.5;
        N = (N * thikness * density) / 10;
        P = (P * thikness * density) / 10;
        K = (K * thikness * density) / 10;
        setNpercent(npercent / 100);
        let fertilizerN = N / npercent;
        setNpercent((fertilizerN * 100).toFixed(2));

        setPpercent(ppercent / 100);
        let fertilizerP = P / ppercent;
        setPpercent((fertilizerP * 100).toFixed(2));

        setKpercent(kpercent / 100);
        let fertilizerK = K / kpercent;
        setKpercent((fertilizerK * 100).toFixed(2));

        setQnty(true);
    }


    return (
        <div className='main'>
            <div className='title'>Fertilizer & Temperature prediction</div>
            <div className='bottom-fertilizer'>
                <div className="info">
                    <div className="card-fertilizer">
                        <div>Rainfall prediction for 9 days</div>
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
                            spinner ? <Loader2 /> : (

                                weather && weather.filter((item) => {

                                    const date = new Date(item.time);
                                    return true
                                }).
                                    map((val, index) => {
                                        if (index < 1) {
                                            return
                                        }
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
                    <div className="fertilizer-qty">
                        {
                            qnty ?
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div className='box'>
                                        <img src={Nitrogen} height={50} alt="" />
                                        <p>{npercent} kg/ha</p>
                                    </div>
                                    <div className='box'>
                                        <img src={Phosphorus} height={40} alt="" />
                                        <p>{ppercent} kg/ha</p>
                                    </div>
                                    <div className='box'>
                                        <img src={Potassium} height={40} alt="" />
                                        <p>{kpercent} kg/ha</p>
                                    </div>
                                </div>
                                :
                                <>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <input type="number" placeholder='N %' onChange={(e) => setNpercent(e.target.value)} />
                                        <input type="number" placeholder='P %' onChange={(e) => setPpercent(e.target.value)} />
                                        <input type="number" placeholder='K %' onChange={(e) => setKpercent(e.target.value)} />
                                    </div>
                                    <button onClick={handleQnty}>Submit</button>
                                </>
                        }

                    </div>
                </div>
                <div className="loaders" >
                    <div className='progress-fertilizer-title'>
                        <p>Fertilizer Requirement <br /> Analysis for <u>{state?.name}</u></p>
                        <img src={`/crops/${state?.name}.jpg`} alt={"dasdasda"} height={50} width={50} />
                    </div>
                    {
                        progress1 === undefined ?
                            <div className="error">
                                <Lottie animationData={LottieCat} style={{ height: "300px", width: "200px" }} loop={true} speed="1 !important" />
                                <p>
                                    Click on any Crop
                                </p>
                            </div>
                            :
                            <>
                                <Quantity qnty={progress1} name={"N"} Mode={Mode} />
                                <Quantity qnty={progress2} name={"P"} Mode={Mode} />
                                <Quantity qnty={progress3} name={"K"} Mode={Mode} />
                            </>
                    }
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