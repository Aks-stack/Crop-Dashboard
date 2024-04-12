import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

function Chart_New({ x_name, y_name, z_name, data, count }) {
    const pdata = data;
    return (
        <>
            <ResponsiveContainer width="96%" height="70%" >
                <LineChart margin={{ top: 20, left: -20, bottom: 0, right: 10 }}
                    data={pdata} >
                    <Legend layout="horizontal" verticalAlign="bottom" align="right" />
                    <CartesianGrid />
                    <XAxis fontSize={10} dataKey={count} interval={"preserveStartEnd"} />
                    <YAxis fontSize={10}></YAxis>
                    <Tooltip />
                    <Line
                        dataKey={`${y_name}`}
                        stroke="black"
                        activeDot={{ r: 7 }}
                    />
                    <Line dataKey={`${x_name}`} stroke="red" activeDot={{ r: 8 }} />
                    {z_name &&
                        <Line dataKey={`${z_name}`} stroke="lightgreen" activeDot={{ r: 8 }} />}
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart_New;
