import React, { useState } from 'react'

const RandomColor = () => {
    const [typeofColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState('#0000000')



    return (
        <div className='random_body'>
            <button onClick={setTypeofColor('hex')}>Create HEX Color</button>
            <button onClick={setTypeofColor('rgb')}>Create RGB Color</button>
            <button onClick={typeofColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generator Random Color </button>
        </div>
    )
}

export default RandomColor
