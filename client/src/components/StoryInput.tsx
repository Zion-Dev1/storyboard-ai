import React, { useState } from "react";
import { TextField, IconButton, Button } from "@mui/material";
import { Send, AutoFixHigh } from "@mui/icons-material";
import generateStory from "../services/generateStoryApi";

const StoryInput: React.FC = () => {
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim()) return;

    setStory("");
  };

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Type in your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        multiline
      ></TextField>

      <Button
        variant="text"
        onClick={async () => {
          const result = await generateStory()
          const storyList = result.results
          setStory(storyList.join("\n"))
        }}
        startIcon={<AutoFixHigh />}
      >
        Generate
      </Button>

      <IconButton type="submit" onClick={handleSubmit}>
        <Send />
      </IconButton>
    </div>
  );
};

export default StoryInput;
