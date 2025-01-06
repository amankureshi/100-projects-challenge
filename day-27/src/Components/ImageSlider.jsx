import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "../App.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentslide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(false);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            console.log(data);

            if (Array.isArray(data)) {
                setImages(data);
            } else if (data.results || data.result) {
                setImages(data.results || data.result);
            } else {
                setErrorMsg("API");
            }
            setLoading(false);
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentslide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentslide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    if (loading) {
        return <>Loading data ! Please wait</>;
    }

    if (errorMsg !== null) {
        return <div>Error occured !{errorMsg}</div>;
    }

    return (
        <div className="container">
            <FaArrowCircleLeft
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                        key={imageItem.id || index}
                    />
                ))
                : null}
            {/* <FaArrowCircleRight onClick={handleNext} className="arrow arrow-left" /> */}
            <FaArrowCircleRight
                onClick={handleNext}
                className="arrow arrow-right" // Corrected from "arrow-left" to "arrow-right"
            />
            <span className="circle-indicators">
                {images && images.length
                    ? images.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlide === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                            onClick={() => setCurrentslide(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    );
};

export default ImageSlider;
