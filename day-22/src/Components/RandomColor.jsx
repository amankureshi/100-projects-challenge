import React, { useState } from 'react'

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
        console.log(hexColor);
    }
    function handleCreateRandomRgbColor() {

    }


    return (
        <div className='random_body'>
            <button onClick={() => setTypeofColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeofColor('rgb')}>Create RGB Color</button>
            <button onClick={typeofColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generator Random Color </button>
        </div>
    )
}

export default RandomColor
