import { useState } from "react";
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

  return (
    <>
      <div className="container">
        <h2 className="text-center">Image Gallery</h2>
        <div className="row g-3">
          {images.map((img, i) => {
            <div className="col-md-4">
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="img-fluid"
                onClick={() => openLightBox(i)}
              />
              <button className="btn-primary">About me</button>
            </div>;
          })}
        </div>
        {selectedImg && (
          <div className="modal fade">
            <div className="d-flex btn-light">
              <button className="btn">Prev</button>
              <img src="pending-image" alt="selected-image" />
              <button className="btn">Next</button>
            </div>
            <button className="btn">X</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
