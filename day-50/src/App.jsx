import "./App.css";

function App() {
  return (
    <>
      <form>
        <h1>QR code Generator in React JS</h1>
        <input
          type="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL to generate QR code"
        />
      </form>
    </>
  );
}

export default App;
