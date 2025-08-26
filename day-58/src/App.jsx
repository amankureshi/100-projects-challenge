import { useState } from "react";
import "./App.css";

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
    setSelectedImg(image[newIndex]);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Image Gallery</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <img src="pending-image" alt="image" className="img-fluid" />
            <button className="btn-primary">About me</button>
          </div>
        </div>
      </div>
      <div className="modal fade">
        <div className="d-flex btn-light">
          <button className="btn">Prev</button>
          <img src="pending-image" alt="selected-image" />
          <button className="btn">Next</button>
        </div>
        <button className="btn">X</button>
      </div>
    </>
  );
}

export default App;
