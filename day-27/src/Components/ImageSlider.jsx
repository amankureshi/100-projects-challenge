import React, { useEffect, useState } from 'react'

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentslide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json()

            console.log(data);


            if (Array.isArray(data)) {
                setImages(data)
            } else if (data.result) {
                setImages(data.result)
            }
            else {
                setErrorMsg("API")
            }
            setLoading(fa)
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    if (loading) {
        return <>
            Loading data ! Please wait
        </>
    }

    if (errorMsg !== null) {
        return <div>
            Error occured !{errorMsg}
        </div>
    }

    return (
        <div className='container'>
            {
                images.map(imageItem =>
                    <img src={imageItem.download_url} alt={imageItem} className='current-image' key={imageItem.id} />
                )
            }
        </div>
    )
}

export default ImageSlider
