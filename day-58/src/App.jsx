import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import "./App.css";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
];

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightBox = (index) => {
    setSelectedImg(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedImg(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  // <-------- Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;

      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, currentIndex]);

  return (
    <div className="gallery-container">
      <h2 className="title">Image Gallery</h2>
      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-card" key={i}>
            <img
              src={img}
              alt={`Gallery ${i}`}
              onClick={() => openLightBox(i)}
            />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="custom-modal" onClick={closeLightbox}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-button" onClick={prevImage}>
              <GrFormPrevious size={24} />
            </button>
            <img src={selectedImg} alt="selected" className="modal-image" />
            <button className="nav-button" onClick={nextImage}>
              <MdNavigateNext size={24} />
            </button>
          </div>

          {/* <-------- Caption */}
          <p className="image-caption">
            Image {currentIndex + 1} of {images.length}
          </p>

          {/* <--------  Thumbnails */}
          <div className="thumbnail-row">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`thumbnail ${
                  currentIndex === index ? "active-thumb" : ""
                }`}
                onClick={() => openLightBox(index)}
              />
            ))}
          </div>

          <button className="close-button" onClick={closeLightbox}>
            <ImCross />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
