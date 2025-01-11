import React, { useEffect, useState } from 'react'

const ScrollIndicators = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl)
            const data = await response.json();
            alert(data)
            console.log(data);
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return (
        <div>
            <h2>Aman kureshi</h2>
        </div>
    )
}

export default ScrollIndicators;    
