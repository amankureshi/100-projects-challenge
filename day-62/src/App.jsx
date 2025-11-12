import { useState } from "react";
import { GiCursedStar, GiMoebiusStar } from "react-icons/gi";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [rephrased, setRephrased] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRephrase() {
    if (!text.trim()) return alert("Please enter a sentence");
    setLoading(true);
    setRephrased("");

    try {
      const res1 = await fetch(
        "https://api.mymemory.translated.net/get?q=" +
          encodeURIComponent(text) +
          "&langpair=en|fr"
      );
      const data1 = await res1.json();
      const french = data1?.responseData?.translatedText;

      const res2 = await fetch(
        "https://api.mymemory.translated.net/get?q=" +
          encodeURIComponent(french) +
          "&langpair=fr|en"
      );
      const data2 = await res2.json();
      const suggestion =
        data2?.responseData?.translatedText || "Could not rephrase right now.";
      setRephrased(suggestion);
    } catch (err) {
      console.error(err);
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
    alert("Copied to clipboard!");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 text-center">
        <h1 className="flex items-center justify-center gap-2 text-4xl font-extrabold text-white drop-shadow mb-4">
          <GiMoebiusStar className="text-teal-300 drop-shadow-md" />
          <span>Rephrase It</span>
        </h1>
        <p className="text-white/80 mb-6 text-sm">
          Instantly rephrase your sentence with bilingual magic 🪄
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something to rephrase..."
          rows={5}
          className="w-full p-4 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-4 focus:ring-indigo-300 resize-none transition"
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={handleClear}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 active:scale-95 transition-all font-medium shadow-sm"
          >
            Clear
          </button>

          <button
            onClick={handleRephrase}
            disabled={loading}
            className={`px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-all active:scale-95 ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Rephrasing..." : "Rephrase"}
          </button>
        </div>

        {rephrased && (
          <div className="mt-6 text-left bg-white/80 rounded-2xl p-4 shadow-lg border border-white/30 animate-fadeIn">
            <h3 className="font-semibold text-indigo-700 mb-2">
              ✍️ Rephrased Sentence
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">{rephrased}</p>
            <div className="text-right">
              <button
                onClick={handleCopy}
                className="mt-3 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="text-white/70 mt-6 text-xs">
        Built with ❤️ using React + Tailwind
      </footer>
    </div>
  );
}

export default App;
