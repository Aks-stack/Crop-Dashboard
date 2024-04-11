import { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar';

function Quantity({ qnty, name, Mode }) {
    return (
        <div className="item" style={{ position: "relative", marginTop: "15px" }}>
            <ProgressBar
                radius={80}
                progress={qnty}
                cut={120}
                rotate={-210}
                strokeWidth={16}
                strokeColor={Mode ? "green" : "#5d9cec"}
                strokeLinecap="round"
                trackStrokeWidth={8}
                trackStrokeColor="#e6e6e6"
                trackStrokeLinecap="round"
                initialAnimation={true}
                transition="1.5s ease 0.5s"
                trackTransition="0s ease"
            >
                <div className="indicator-volume" style={{ position: "absolute", top: "50%", left: "43%" }}>
                    <div className="inner" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                        <p style={{ fontSize: "25px", fontWeight: "800" }}>{name}</p>
                        <div className="percentage">{qnty}%</div>
                    </div>
                </div>
            </ProgressBar>

        </div>
    )
}

export default Quantity