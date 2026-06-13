import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);
    const trafficColors = ["red", "yellow", "green"];

    const ChangeColor = () => {
        const currentIndex = trafficColors.indexOf(color);
        const nextIndex = (currentIndex + 1) % trafficColors.length;
        setColor(trafficColors[nextIndex]);
    };

    return (
        <div className="traffic-page">
            <h1>Traffic Light</h1>
            <div className="traffic-pole"></div>
            <div className="traffic-light">
                <div
                    onClick={() => setColor("red")}
                    className={`light red ${color === "red" ? "selected" : ""}`}
                ></div>
                <div
                    onClick={() => setColor("yellow")}
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                ></div>
                <div
                    onClick={() => setColor("green")}
                    className={`light green ${color === "green" ? "selected" : ""}`}
                ></div>
                {showPurple && (
                    <div
                        onClick={() => setColor("purple")}
                        className={`light purple ${color === "purple" ? "selected" : ""}`}
                    ></div>
                )}
            </div>
            <div className="traffic-buttons">
                <button onClick={ChangeColor}>
                    Change Color
                </button>
                <button
                    onClick={() => {
                        setShowPurple(true);
                        setColor("purple");
                    }}
                >
                    Add Purple
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;