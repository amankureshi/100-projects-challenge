import React from 'react'

const Button = (props) => {
    return (
        <>
            <button onClick={props.callApi}>Click here</button>
        </>
    )
}

export default Button