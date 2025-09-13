import React from "react";
import { TextField, IconButton, Button, CircularProgress } from "@mui/material";
import { Send, AutoAwesome } from "@mui/icons-material";
import generateStoryApi from "../services/generateStoryApi";
import useStoryInputStore from "../store/storyInputStore";
import { useNavigate } from "react-router-dom";

const StoryInput = () => {
  const { story, setStory, isGenerating, setIsGenerating } =
    useStoryInputStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story) return;

    navigate("/board");
  };

  const generateStory = async () => {
    try {
      setIsGenerating(true);
      const result = await generateStoryApi();
      const storyList = result.results;
      setStory(storyList);
    } catch (err) {
      console.error("Error generating story:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Type in your story..."
        value={story}
        // onChange={(e) => setStory(e.target.value)}
        multiline
      ></TextField>

      <Button
        variant="contained"
        onClick={generateStory}
        startIcon={isGenerating ? <CircularProgress /> : <AutoAwesome />}
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
