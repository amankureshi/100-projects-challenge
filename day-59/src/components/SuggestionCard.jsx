import React from "react";

export default function SuggestionCard({ sug, onApply }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-4 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col space-y-2">
        {/* Category + Message */}
        <div>
          <h4 className="text-sm font-semibold text-indigo-600">
            {sug.category}
          </h4>
          <p
            className="text-sm text-gray-700 mt-1"
            dangerouslySetInnerHTML={{ __html: sug.message }}
          />
        </div>

        {/* Suggestions */}
        {sug.replacements?.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1">
              Suggestions:
            </p>
            <div className="flex flex-wrap gap-2">
              {sug.replacements.map((r, i) => (
                <button
                  key={i}
                  onClick={() => onApply(r)}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:scale-105 hover:shadow-md transition"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Context */}
        {sug.context?.text && (
          <div className="text-xs text-gray-500 italic mt-2">
            Context: “{sug.context.text}”
          </div>
        )}
      </div>
    </div>
  );
}
