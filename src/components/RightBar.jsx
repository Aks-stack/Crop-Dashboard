import React, { useEffect, useState } from 'react'

import { data1, data2, data3 } from '../data';
import { data4 } from '../data';

import "./rightbar.css";
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import tempPredict from "../assets/sun_2698213.png";
import Chart_New from './Chart_New';
import { GrLocation } from "react-icons/gr";
import Lottie from 'lottie-react';
import lottieDog from '../assets/Animation - 1713222371085.json';
import Loader from './Loader';
import axios from 'axios';

function RightBar({ Mode, city, latlong }) {

    const [predict, setPredict] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const [response, setResponse] = useState(null);
    const [updateData1, setUpdateData1] = useState(data1);
    const [updateData2, setUpdateData2] = useState(data2);
    const [updateData3, setUpdateData3] = useState(data3);
    const [updateData4, setUpdateData4] = useState(data4);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const esp = localStorage.getItem("esp")
        const server = localStorage.getItem("server")
        console.log("Right bar ", esp);
    }, [])

    useEffect(() => {

        let socket = new WebSocket("ws://192.168.0.192/ws")
        socket.onopen = () => {
            console.log("connection open");
        };
        socket.onmessage = (event) => {
            var data = event.data;
            setResponse(JSON.parse(data));
            setCount((prev) => prev + 1);
        }

        socket.onclose = () => {
            console.log("Connection closed");
        }
    }, []);

    // Updating of Data whenever Socket responces and increasing the value of count by 1
    useEffect(() => {
        // console.log('Count updated:', count, response);
        setUpdateData1([...updateData1, { time: count, temp: response?.Temp, }])
        setUpdateData2([...updateData2, { time: count, N: response?.n, P: response?.p, K: response?.k }])
        setUpdateData3([...updateData3, { time: count, temp: 27, humidity: 0 }])
        setUpdateData4([...updateData4, { time: count, moisture: response?.m }])
    }, [count]);

    const imag = [
        {
            name: "Potato",
            url: "/crops/potato.jpg",
            percentage: 78
        },
        {
            name: "Rice",
            url: "/crops/rice.avif",
            percentage: 14
        }
        ,
        {
            name: "Wheat",
            url: "/crops/wheat.avif",
            percentage: 8

        },
        {
            name: "Maize",
            url:
                "/crops/corn.jpg",
            percentage: 8

        }, {
            name: "Apple",
            url:
                "/crops/apple.avif",
            percentage: 8

        }]

    const handlePredict = () => {
        setPredict(!predict);
        setSpinner(true);
        const getData = async () => {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(data);
        }
        setTimeout(() => {
            getData();
            setSpinner(false);
        }, 2000);
    }

    return (
        <div className='right-container'>
            <div className='right-container-title'>
                <p>Main Dashboard</p>
                <div className='location-item'>
                    <GrLocation />
                    {city}
                </div>
                <button class="learn-more" onClick={handlePredict}>
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Predict</span>
                </button>
            </div>
            <div className='bottom'>

                {/* Taking 60% of the Right-part */}
                <div className='right-container-col1'>

                    {/* Chart - 1 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>Soil Temperature</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"temp"} data={updateData1} />
                    </div>

                    {/* Chart - 2 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>N P K Data</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"N"} y_name={"P"} z_name={"K"} data={updateData2} />
                    </div>

                    {/* Chart - 3 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>Temperature & Humidity</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"temp"} y_name={"humidity"} data={updateData3} />
                    </div>

                    {/* Chart - 4 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>Moisture</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"moisture"} data={updateData4} />
                    </div>
                </div>

                {/* Taking 40% of the Right-Bar */}
                <div className='right-container-col2'>
                    <div className='crop-recommend container'>
                        <div className='chart-container-top'>
                            <p>Crop Recommendation</p>
                            <img src={plantPredict} height={25} width={25} alt="" />
                        </div>
                        <div className="recommendation-panel">
                            {predict ? (
                                spinner ? <Loader /> :
                                    imag.map((val, index) => {
                                        return (
                                            <div className='img-container'>
                                                <img src={val.url} alt='' />
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <span>{val.name}</span>
                                                    <span>{val.percentage}%</span>
                                                </div>
                                            </div >
                                        )

                                    })
                            )
                                :
                                <div className="error">
                                    <Lottie animationData={lottieDog} style={{ height: "250px", width: "250px" }} loop={true} />
                                    <p>
                                        Click on predict button
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightBar