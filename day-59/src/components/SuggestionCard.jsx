import React from "react";

const SuggestionCard = ({ sug }) => {
  return (
    <div className="border rounded p-3 mb-2 bg-white shadow-sm">
      <div className="text-sm font-semibold">{sug.type}</div>;
      <div className="text-xs text-gray-600 mt-1">{sug.message}</div>
    </div>
  );
};

export default SuggestionCard;
