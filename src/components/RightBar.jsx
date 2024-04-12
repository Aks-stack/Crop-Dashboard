import React, { useEffect, useState } from 'react'

import { data1, data2, data3 } from '../data';
import { data4 } from '../data';
import { ReactComponent as Publish } from '../assets/upload-svgrepo-com.svg';

import "./rightbar.css";
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import tempPredict from "../assets/sun_2698213.png";
import Chart_New from './Chart_New';

function RightBar({ Mode }) {

    let socket = new WebSocket("ws://192.168.4.1/ws")

    const [updateData1, setUpdateData1] = useState(data1);
    const [updateData2, setUpdateData2] = useState(data2);
    const [updateData3, setUpdateData3] = useState(data3);
    const [updateData4, setUpdateData4] = useState(data4);

    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setUpdateData1([...updateData1, { time: count, temp: 11, moisture: 120, }])
            setUpdateData2([...updateData2, { time: count, N: 11, P: 120, K: 125 }])
            setUpdateData3([...updateData3, { time: count, temp: 25, humidity: 45 }])
            setCount(count + 1);
        }, 1000)
    }, [count])

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

        },
        {
            name: "Wheat",
            url:
                "https://img.freepik.com/free-photo/corn-cob-green-leaves-fresh-sweet-corn-farmers-market-closeup-sweet-boiled-corn-market_1391-240.jpg?t=st=1712950884~exp=1712954484~hmac=d5f863070832ac3e64c6948f8d1101d2c56d2d95181f6765855e044f09cff1f8&w=996",
            percentage: 8

        }, {
            name: "Wheat",
            url:
                "https://img.freepik.com/free-photo/red-fresh-apples-as-background_78492-3922.jpg?t=st=1712951016~exp=1712954616~hmac=26d3ddf56f37fb02cafef64e1f2f861f887609eefd8c30d8744713bc1d6d03a9&w=996",
            percentage: 8

        }]

    return (
        <div className='right-container'>
            <div className='right-container-title'>
                <p>Main Dashboard</p>
                <button class="learn-more">
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
                            <p>Soil Temperature & Moisture</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"temp"} y_name={"moisture"} data={updateData1} />
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
                            <p>PH Value</p>
                            <img src={buttonChart} alt="" />
                        </div>
                        <Chart_New x_name={"N"} y_name={"P"} data={data1} />
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
                                        <div className='img-container'>
                                            <img src={val.url} alt='' />
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

                </div>
            </div>

        </div>
    )
}

export default RightBar