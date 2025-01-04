import React from 'react'
import "../index.css"
const SignalLight = ({ color, isActice }) => {
    return (
        <div div className='hero' >
            <div className="signal" style={{ backgroundColor: `${isActice ? color : "grey"}` }}>
            </div>
        </div >
    )
}

export default SignalLight;
