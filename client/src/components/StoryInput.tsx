import React, { useState } from "react";
import { LuWandSparkles, LuSend } from "react-icons/lu";

const StoryInput: React.FC = () => {
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim()) return;

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
          Generate
          <LuWandSparkles />
        </button>

        <button type="submit">
          Send
          <LuSend />
        </button>
      </div>
    </form>
  );
};

export default StoryInput;
