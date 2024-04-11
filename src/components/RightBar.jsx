import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import { data1, data2, data3 } from '../data';
import { data4 } from '../data';

import "./rightbar.css";
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import tempPredict from "../assets/sun_2698213.png";

function RightBar({ Mode }) {

    const [updateData1, setUpdateData1] = useState(data1);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setUpdateData1([...updateData1, [count, 26.2, 140]])
            setCount(count + 1);
        }, 1000)
    }, [count])

    // console.log(count)

    const imag = [
        {
            name: "Potato",
            url: "https://img.freepik.com/free-photo/rustic-unpeeled-potatoes-desks_144627-3901.jpg?t=st=1712753748~exp=1712757348~hmac=178cdd27a843b6931dae696c8edc5135edaa671ae71d3a5ae3ee1f1abaaa0a07&w=996",
            percentage: 78
        },
        {
            name: "Rice",
            url: "https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?t=st=1712752730~exp=1712756330~hmac=468057fc9411797e73bc80ab3278aecae1623df06f37424a23a7dc8998079f5a&w=996",
            percentage: 14
        }
        ,
        {
            name: "Wheat",
            url:
                "https://img.freepik.com/free-photo/wheat-field-waving-wind-field-background_1268-30616.jpg?t=st=1712753654~exp=1712757254~hmac=9966fa288cd459031bbbcedd2a2d6c17e8c8453f6b3c4dee3aff9ce18583233b&w=1060",
            percentage: 8

        }]


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

    return (
        <div className='right-container'>
            <div className='right-container-title'>Main Dashboard</div>
            <div className='bottom'>

                {/* Taking 60% of the Right-part */}
                <div className='right-container-col1'>

                    {/* Chart - 1 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>Soil Temperature & Moisture</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart
                            className='chart'
                            chartType="LineChart"
                            style={{ width: "100%" }}
                            data={updateData1}
                            options={options}
                        />
                    </div>

                    {/* Chart - 2 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>N P K Data</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart
                            className='chart'
                            chartType="LineChart"
                            style={{ width: "100%" }}
                            data={data2}
                            options={options}
                        />
                    </div>

                    {/* Chart - 3 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>Temperature & Humidity</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart
                            className='chart'
                            chartType="LineChart"
                            style={{ width: "100%" }}
                            data={data3}
                            options={options}
                        />
                    </div>

                    {/* Chart - 4 */}
                    <div className='chart-container'>
                        <div className='chart-container-top'>
                            <p>PH Value</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart
                            className='chart'
                            chartType="LineChart"
                            style={{ width: "100%" }}
                            data={data4}
                            options={options}
                        />
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
                            {
                                imag.map((val, index) => {
                                    return (
<<<<<<< HEAD
                                        <div className='img-container'>
                                            <img src={val.url} alt=''/>
=======
                                        <div className='img-container' key={index}>
                                            <img src={val.url} alt='' />
>>>>>>> dash-v4
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span>{val.name}</span>
                                                <span>{val.percentage}%</span>
                                            </div>
                                        </div >
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div className='temperature container'>
                        <div className='chart-container-top'>
                            <p>Temperature Prediction</p>
                            <img src={tempPredict} height={25} width={25} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightBar