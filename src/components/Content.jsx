import React, { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  const formatText = () => {
    const formatted = text
      .split("\n")
      .map((line) => `'${line.trim()}'`) // Trim whitespace and add quotes
      .join(",\n"); // Join with commas and newlines
    setText(formatted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <div className="flex items-center">
      <textarea
        className="w-[45%] h-[85vh] mx-4 text-sm rounded-lg p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="input your list here.."
      />
      <br />
      <div className="flex flex-col gap-4">
       <button onClick={formatText}>format Text</button>
       <button onClick={copyToClipboard}>copy Text</button>
      </div>
      </div>

    </div>
  );
};

export default Content;
