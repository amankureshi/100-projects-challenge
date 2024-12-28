import React from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "../app.css"

const Star = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex + 1)
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex + 1)
    }
    function handleMouseLeave() {
        setHover(0)
    }
    return (
        <div className='star-rating' >
            <h1>Star Rating</h1>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index + 1;

                    return <FaStar
                        key={index}
                        className={index < (hover || rating) ? 'active' : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                })
            }
        </div>
    )
}

export default Star
