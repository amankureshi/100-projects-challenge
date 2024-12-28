import React from 'react'
import { useState } from 'react'
import { CiStar } from "react-icons/ci";


const Star = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);



    return (
        <div className='star-rating'>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index + 1;
                    return <CiStar
                        key={index}
                        onclick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
    )
}

export default Star
