import React, { useEffect, useState } from 'react'
import SignalLight from './SignalLight'

const Trafic = ({ lights = ["green", "yellow", "red"] }) => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const intervalid = setInterval(() => {
            setActive((prevActive) => {
                return (prevActive + 1) % lights.length;
            })
        }, 1000)
        return () => {
            clearInterval(intervalid);
        }
    }, [])
    return (
        <>
            {lights.map((color, index) => {
                return <SignalLight isActice={active === index} color={color} key={index} />
            })}
        </>
    )
}

export default Trafic;