import React from 'react'
import { Chart } from "react-google-charts";
import "./rightbar.css";
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import tempPredict from "../assets/sun_2698213.png";

function RightBar() {
    const data1 = [
        ["Year", "Temperature", "Moisture"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];
    const options = {
        width: "450px",
        curveType: "",
        legend: { position: "bottom" },
        chartArea: { left: "10%", width: "85%", height: "70%" },
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
                            data={data1}
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
                            data={data1}
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
                            data={data1}
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