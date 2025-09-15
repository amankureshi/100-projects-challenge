import React from "react";

export default function SuggestionCard({ sug, onApply }) {
  return (
    <div className="border rounded p-3 mb-3 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div style={{ flex: 1 }}>
          <div className="text-sm font-semibold">{sug.category}</div>
          <div
            className="text-xs text-gray-600 mt-1"
            dangerouslySetInnerHTML={{ __html: sug.message }}
          />
          {sug.replacements && sug.replacements.length > 0 && (
            <div className="mt-2 text-sm">
              <div className="text-xs font-medium mb-1">Suggestions:</div>
              <div className="flex gap-2 flex-wrap">
                {sug.replacements.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => onApply(r)}
                    className="text-xs px-2 py-1 border rounded bg-gray-50 hover:bg-gray-100"
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* show context (optional) */}
          {sug.context && sug.context.text && (
            <div className="mt-2 text-xs text-gray-500">
              Context: "{sug.context.text}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
