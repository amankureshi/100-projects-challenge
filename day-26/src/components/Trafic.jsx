import React from 'react'
import SignalLight from './SignalLight'

const Trafic = ({ lights = ["green", "yellow", "red"] }) => {
    return (
        <>
            {lights.map((color) => {
                return <SignalLight color={color} />
            })}
        </>
    )
}

export default Trafic
