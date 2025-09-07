import React, { useState } from "react";

const StoryInput: React.FC = () => {
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim()) return;
    console.log("Submitted story:", story);
    setStory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Type in your story..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <button type="button" onClick={() => console.log("Generate clicked")}>
          {/* Replace with your Generate icon */}
          Generate
        </button>
        <button type="submit">
          {/* Replace with your Send icon */}
          Send
        </button>
      </div>
    </form>
  );
};

export default StoryInput;
