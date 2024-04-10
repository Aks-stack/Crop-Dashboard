import React from 'react'
import { Chart } from "react-google-charts";
import { data1, data2, data3, data4 } from '../data';

import "./rightbar.css";
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import tempPredict from "../assets/sun_2698213.png";


function RightBar(props) {

    const options = {
        width: "450px",
        curveType: "",
        legend: { 
            position: "bottom", 
            textStyle: {color: props.Mode?'grey':'black'} 
        },
        chartArea: { left: "10%", width: "85%", height: "70%" },
        backgroundColor: props.Mode?"#111C44":'white',
        hAxis:{
            baselineColor: props.Mode?'grey':'black',
            // gridlineColor: props.Mode?'white':'black',
            textStyle:{color: props.Mode?'grey':'black'}
          },
        vAxis:{
            baselineColor: props.Mode?'grey':'black',
            // gridlineColor: props.Mode?'white':'black',
            textStyle:{color: props.Mode?'grey':'black'}
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
                            data={data1}
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