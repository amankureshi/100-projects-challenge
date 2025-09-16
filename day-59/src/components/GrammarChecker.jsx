// src/components/GrammarChecker.jsx
import React, { useState } from "react";
import SuggestionCard from "./SuggestionCard";

export default function GrammarChecker() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheck() {
    setError("");
    setLoading(true);
    setSuggestions([]);

    try {
      const params = new URLSearchParams({
        text,
        language: "en-US",
        // enable more categories/rules to catch agreement, typos, etc.
        enabledCategories: "GRAMMAR,TYPOGRAPHY,PUNCTUATION,CASING",
        enabledRules: "TYPOS,GRAMMAR,AGREEMENT,CONFUSION,PUNCTUATION",
      });

      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!res.ok) {
        throw new Error(`API error ${res.status}`);
      }

      const data = await res.json();

      // Map LanguageTool matches -> our suggestion format
      const formatted = data.matches.map((m) => {
        return {
          id: `${m.offset}-${m.length}-${m.rule.id}`,
          ruleId: m.rule.id,
          category: m.rule && m.rule.category ? m.rule.category.name : "Issue",
          message: m.message,
          offset: m.offset,
          length: m.length,
          // replacements is array of objects {value: '...'}. keep top 3 values.
          replacements: (m.replacements || []).slice(0, 3).map((r) => r.value),
          context: m.context || null,
        };
      });

      setSuggestions(formatted);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while checking. See console for details.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setText("");
    setSuggestions([]);
    setError("");
  }

  // Apply a replacement for one suggestion (replace the substring)
  function applyFix(sug, replacement) {
    if (!sug || replacement == null) return;
    const before = text.slice(0, sug.offset);
    const after = text.slice(sug.offset + sug.length);
    const newText = before + replacement + after;
    setText(newText);

    // remove the applied suggestion from list (simple approach)
    setSuggestions((prev) => prev.filter((p) => p.id !== sug.id));
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        📝 Grammar Checker
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your paragraph here..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-4 bg-white text-base"
      />

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          onClick={handleCheck}
          className={`px-6 py-2 text-white font-semibold rounded-lg transition-colors ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading || !text.trim()}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Checking...
            </span>
          ) : (
            "Check"
          )}
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Clear
        </button>
      </div>

      {error && <div className="text-red-600 font-medium mb-4">{error}</div>}

      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">
          Suggestions ({suggestions.length})
        </h3>
      </div>

      {suggestions.length === 0 ? (
        <div className="text-sm text-gray-500">
          No suggestions. Try checking some text.
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((s) => (
            <SuggestionCard
              key={s.id}
              sug={s}
              onApply={(replacement) => applyFix(s, replacement)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
