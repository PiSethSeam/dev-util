import React, { useState } from "react";

const Content = () => {
  const [inputText, setInputText] = useState(""); // Stores raw input
  const [formattedText, setFormattedText] = useState(""); // Stores formatted result
  const [notification, setNotification] = useState(""); // Notification message

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
    setNotification("Save!"); // Show notification
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  // Count the number of lines in the input text
  const lineCount = inputText.trim().split("\n").filter(line => line.trim()).length;

  return (
    <div className="relative flex flex-col items-center">
      {/* Notification display */}
      {notification && (
        <div className="absolute bg-green-100 text-green-800 p-4 rounded-md shadow-lg text-center w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {notification}
        </div>
      )}

      <div className="flex justify-evenly w-full">
        {/* Raw input textarea */}
        <textarea
          className="rounded-lg text-sm w-[45%] h-[85vh] border border-gray-300"
          value={inputText}
          onChange={handleTextChange}
          placeholder="Input list here.."
        />
        
        {/* Label displaying line count */}
        <label className="mt-2 text-sm text-center">
          Items Count: <br/>{lineCount}
        </label>

        {/* Formatted output textarea with hover effect */}
        <textarea
          className="rounded-lg text-sm w-[45%] h-[85vh] border border-gray-300 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all active:scale-105 duration-300"
          value={formattedText}
          readOnly // Make this textarea read-only
          placeholder="Formatted result"
          onClick={handleCopyToClipboard} // Copy text when clicked
        />
      </div>
    </div>
  );
};

export default Content;