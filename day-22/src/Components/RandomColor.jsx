import React, { useState } from 'react'
import "../App.css"

const RandomColor = () => {
    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState('#0000000')

    function RandomColorUtility(lenght) {
        return Math.floor(Math.random() * lenght)
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomColorUtility(hex.length)];
        }
        setColor(hexColor)
        console.log(hexColor);
    }
    function handleCreateRandomRgbColor() {
        const r = RandomColorUtility(256);
        const g = RandomColorUtility(256);
        const b = RandomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    function handleHexaColorbtn() {
        handleCreateRandomHexColor();
    }
    function handleRgbColorbtn() {
        handleCreateRandomRgbColor()
    }

    return (
        <div className='random_body' style={{ width: "100vw", height: "100vh", background: color, }}>
            {/* <button onClick={handleHexaColorbtn}>Create HEX Color</button>
            <button onClick={handleRgbColorbtn}>Create RGB Color</button>
            <button onClick={typeofColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generator Random Color </button> */}
            <button onClick={() => { setTypeofColor('hex'); handleCreateRandomHexColor(); }}>
                Create HEX Color
            </button>
            <button onClick={() => { setTypeofColor('rgb'); handleCreateRandomRgbColor(); }}>
                Create RGB Color
            </button>
            <button onClick={() => { setTypeofColor('rgb'); handleCreateRandomRgbColor(); }}>
                Generator Random Color
            </button>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: '2rem', marginTop: "4rem", flexDirection: "column", gap: "20px" }}>
                <h3>{typeofColor === 'rgb' ? "RGB Color" : "HEX color"}</h3>
                <h1>{color}</h1>
            </div>
        </div >
    )
}

export default RandomColor
