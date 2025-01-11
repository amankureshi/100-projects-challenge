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

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

            // alert(data)
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
        <div className='container'>
            <h1>Custom Scroll Indicator</h1>
            <div className="data-content">
                {data && data.length > 0 ? data.map((dataItem) => <p>{dataItem.title}</p>) : null}
            </div>
        </div>
    )
}

export default ScrollIndicators;    
