import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

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

  return (
    <>
      <div className="container py-2">
        <h2 className="text-center mb-4">Image Gallery</h2>
        <div className="row g-3">
          {images.map((img, i) => (
            <div className="col-md-4">
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="img-fluid rounded shadow-sm"
                onClick={() => openLightBox(i)}
              />
            </div>
          ))}
        </div>
        {selectedImg && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            onClick={closeLightbox}
          >
            <div className="d-flex btn-light justify-content-center align-items-center vh-100">
              <button
                className="btn btn btn-dark me-2 d-flex align-items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <GrFormPrevious />
                Prev
              </button>
              <img
                src={selectedImg}
                alt="selected-image"
                className="imd-fluid rounded selected-image"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="btn btn-dark ms-2 d-flex align-items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                Next <MdNavigateNext />
              </button>
            </div>
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-3"
              onClick={closeLightbox}
            >
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
