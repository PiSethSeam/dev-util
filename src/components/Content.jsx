import React, { useState } from "react";

const Content = () => {
  const [inputText, setInputText] = useState(""); // Stores raw input
  const [formattedText, setFormattedText] = useState(""); // Stores formatted result

  const formatText = (input) => {
    return input
      .split("\n")
      .map((line) => `'${line.trim()}'`) // Trim whitespace and add quotes
      .join(",\n"); // Join with commas and newlines
  };

  const handleTextChange = (e) => {
    const input = e.target.value;
    setInputText(input); // Update raw input
    setFormattedText(formatText(input)); // Update formatted text
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedText); // Copy formatted text to clipboard
    alert("Formatted text copied to clipboard!"); // Optional feedback
  };

  // Count the number of lines in the input text
  const lineCount = inputText.trim().split("\n").filter(line => line.trim()).length;

  return (
    <div className="flex justify-evenly">
      {/* Raw input textarea */}
      <textarea
        className="rounded-lg text-sm w-[45%] h-[85vh]"
        value={inputText}
        onChange={handleTextChange}
        placeholder="Input list here.."
      />
      
      {/* Label displaying line count */}
      <label className="mt-2 text-sm">
        TID Count: {lineCount}
      </label>

      {/* Formatted output textarea */}
      <textarea
        className="rounded-lg text-sm w-[45%] h-[85vh]"
        value={formattedText}
        readOnly // Make this textarea read-only
        placeholder="Formatted result"
        onClick={handleCopyToClipboard} // Copy text when clicked
      />
    </div>
  );
};

export default Content;