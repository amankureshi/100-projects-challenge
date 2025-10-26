import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        📝 Sentence Rephraser
      </h1>
      <textarea placeholder="Type a sentence to rephrase..." rows={5} />
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 rounded-md border">Clear</button>
      </div>
    </div>
  );
}

export default App;
