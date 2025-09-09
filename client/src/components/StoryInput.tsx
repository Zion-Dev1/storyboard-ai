import React from "react";
import { TextField, IconButton, Button, CircularProgress } from "@mui/material";
import { Send, AutoFixHigh } from "@mui/icons-material";
import generateStory from "../services/generateStoryApi";
import useStoryInputStore from "../store/storyInputStore";

const StoryInput: React.FC = () => {
  const { story, setStory, isGenerating, setIsGenerating } =
    useStoryInputStore();

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
          try {
            setIsGenerating(true);
            const result = await generateStory();
            const storyList = result.results;
            setStory(storyList.join("\n"));
          } catch (err) {
            console.error("Error generating story:", err);
          } finally {
            setIsGenerating(false);
          }
        }}
        startIcon={isGenerating ? <CircularProgress /> : <AutoFixHigh />}
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
