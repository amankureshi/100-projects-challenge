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
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">GrammarChecker Checker</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your paragraph"
        className="w-full h-40 p-3 border rounded mb-3 bg-white"
      />

      <div className="flex gap-3 mb-4">
        <button
          onClick={handleCheck}
          className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer"
          disabled={loading || !text.trim()}
        >
          {loading ? "Checking..." : "Check"}
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 rounded border cursor-pointer"
        >
          Clear
        </button>
      </div>

      {error && <div className="text-red-600 mb-3">{error}</div>}

      <h3 className="font-semibold mb-2">Suggestions ({suggestions.length})</h3>

      {suggestions.length === 0 ? (
        <div className="text-sm text-gray-500">
          No suggestions. Try checking some text.
        </div>
      ) : (
        suggestions.map((s) => (
          <SuggestionCard
            key={s.id}
            sug={s}
            onApply={(replacement) => applyFix(s, replacement)}
          />
        ))
      )}
    </div>
  );
}
