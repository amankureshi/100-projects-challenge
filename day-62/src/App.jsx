import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const [rephrased, setRephrased] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReph() {
    if (!text.trim()) return alert("Please enter a sentence");

    setLoading(true);
    setRephrased("");

    try {
      const response = await fetch(
        "https://api.mymemory.translated.net/get?q=" +
          encodeURIComponent(text) +
          "&langpair=en|en"
      );
      const data = await response.json();

      const suggestion =
        data?.responseData?.translatedText || "Could't rephrase right now.";
      setRephrased(suggestion);
    } catch (err) {
      console.log(err);
      setRephrased("Error occurred while rephrasing.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setText("");
    setRephrased("");
  }

  function handleCopy() {
    navigator.clipboard.writeText(rephrased);
    alert("Copy to clipboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          📝 Sentence Rephraser
        </h1>
        <textarea placeholder="Type a sentence to rephrase..." rows={5} />
        <div className="flex justify-between mt-4">
          <button onClick={handleClear} className="px-4 py-2 rounded-md border">
            Clear
          </button>
          <button
            onClick={handleRephrase}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Rephrasing..." : "Rephrase"}
          </button>
        </div>
        <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-2">
            ✨ Rephrased Sentence:
          </h3>
          <p className="text-gray-800 text-sm">rephrased here</p>
          <button
            onClick={handleCopy}
            className="mt-3 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
