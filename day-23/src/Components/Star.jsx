import React from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "../app.css"

const Star = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex)
    }
    function handleMouseLeave() {
        console.log(getCurrentIndex);
        setHover(rating)
    }
    return (
        <div className='star-rating' >
            <h1>Star Rating</h1>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index + 1;

                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : "inactive"}
                        onclick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }
        </div>
    )
}

export default Star
