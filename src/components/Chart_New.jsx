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
    console.log(data);
    return (
        <>
            <ResponsiveContainer width="96%" height="70%" >
                <LineChart margin={{ top: 20, left: -20, bottom: 0, right: 10 }}
                    data={pdata} >
                    <Legend layout="horizontal" verticalAlign="bottom" align="right" />
                    <CartesianGrid />
                    <XAxis fontSize={10} dataKey={count} interval={"preserveStartEnd"} />
                    <YAxis tickFormatter={(value) => value.toFixed(3)} fontSize={10} type="number" ></YAxis>
                    <Tooltip />
                    <Line
                        dataKey={`${x_name}`}
                        stroke="black"
                        dot={false}
                    />
                    {y_name && <Line dataKey={`${y_name}`} stroke="red" dot={false} type='monotone' />}
                    {z_name &&
                        <Line dataKey={`${z_name}`} stroke="blue" dot={false} type='monotone' />}
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart_New;
