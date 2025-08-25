import "./App.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="container">
        <h2 className="text-center">Image Gallery</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <img src="" alt="image" className="img-fluid" />
            <button className="btn-primary">About me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
