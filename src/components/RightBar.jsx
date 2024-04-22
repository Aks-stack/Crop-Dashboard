// Packages
import "./rightbar.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Snackbar from "@material-ui/core/Snackbar";
import { useNavigate } from 'react-router-dom';

// Data
import { data1, data2, data3 } from '../data';
import { data4 } from '../data';

// Import Files and Components
import buttonChart from "../assets/Button.svg";
import plantPredict from "../assets/plant_7963920.png";
import Chart_New from './Chart_New';
import { GrLocation } from "react-icons/gr";
import Lottie from 'lottie-react';
import lottieDog from '../assets/Animation - 1713222371085.json';
import Loader from './Loader';

function RightBar({ Mode, city, latlong }) {

    const [espip, setEspip] = useState(localStorage.getItem("esp"));
    const [serverip, setServerip] = useState(localStorage.getItem("server"));

    const [request, setRequest] = useState([]);
    const [predictarr, setPredictarr] = useState();
    const [open, setOpen] = React.useState(false);

    const handleToClose = (event, reason) => {
        if ("clickaway" == reason) return;
        setOpen(false);
    };

    const [predict, setPredict] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [response, setResponse] = useState(null);
    const [updateData1, setUpdateData1] = useState(data1);
    const [updateData2, setUpdateData2] = useState(data2);
    const [updateData3, setUpdateData3] = useState(data3);
    const [updateData4, setUpdateData4] = useState(data4);
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {

        let socket = new WebSocket(`ws://${espip}/ws`)
        console.log(`ws://${espip}/ws`);

        socket.onopen = () => {
            console.log("connection open");
            setOpen(true);
        };
        socket.onmessage = (event) => {
            var data = event.data;
            setResponse(JSON.parse(data));
            setCount((prev) => prev + 1);
        }
        socket.onclose = () => {
            console.log("Connection closed")
        }
        socket.onerror = () => {
            console.log("Error");
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

    const handlePredict = () => {
        setPredict(!predict);
        setSpinner(true);
        const getData = async () => {

            const { temp } = updateData1[updateData1.length - 1];
            const { N, P, K } = updateData2[updateData2.length - 1];
            const { moisture } = updateData4[updateData4.length - 1]
            setPredictarr([]);
            if (N > 1 && P > 1 && K > 1) {
                console.log("dasdasd");
                request.splice(0, request.length)
                request.push(N)
                request.push(P)
                request.push(K)
                request.push(temp)
                request.push(moisture)

                console.log(request);

                const { data } = await axios.post(`http://${serverip}/api/predict-crop`, { data: request });
                const data2 = data.data?.map((item) => {
                    return { ...item, probability: +item.probability.toFixed(2) }
                })
                setPredictarr(data2);
                console.log(predictarr);
            }
            setSpinner(false);
        }
        setTimeout(() => {
            getData();
            console.log(predictarr);
        }, 1000);
    }

    const handleFertilizer = (crop, n, p, k) => {
        navigate(`/fertilizer`, {
            state: {
                name: crop,
                n,
                p,
                k
            }
        })
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
                <Snackbar
                    anchorOrigin={{
                        horizontal: "center",
                        vertical: "top",
                    }}
                    open={open}
                    autoHideDuration={5000}
                    message="Device connected"
                    onClose={handleToClose}
                />
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
                        <Chart_New x_name={"temp"} data={updateData1} yaxisRange={[22, 55]} />
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
                                    predictarr?.length === 0 ?
                                        <h3>Device Error</h3>
                                        : predictarr?.map((val, index) => {
                                            return (
                                                <div className='img-container'>
                                                    <img onClick={() => handleFertilizer(val?.crop_name, val?.n, val?.p, val?.k)} src={`/crops/${val?.crop_name}.jpg`} alt={val?.crop_name} />
                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", flexDirection: "column" }}>
                                                        <span style={{ textTransform: "capitalize" }}>{val?.crop_name}</span>
                                                        <span>{val?.probability}%</span>
                                                    </div>
                                                </div >
                                            )

                                        })
                            )
                                :
                                <div className="error">
                                    <Lottie animationData={lottieDog} style={{ height: "250px", width: "250px" }} loop={true} speed="1 !important" />
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