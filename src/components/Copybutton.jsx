import React, { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
    <div className="relative inline-block">
      <button onClick={handleCopy} className="focus:outline-none w-3">
        {copied ? (
          <lord-icon
            src="https://cdn.lordicon.com/uvofdfal.json"
            trigger="hover"
          ></lord-icon>
        ) : (
          <lord-icon
            src="https://cdn.lordicon.com/yraqammt.json"
            trigger="hover"
          ></lord-icon>
        )}
      </button>
    </div></>
  );
};

export default CopyButton;
