import React from "react";
import { useNavigate } from "react-router-dom";

import { TextField, IconButton, Button, CircularProgress } from "@mui/material";
import { Send, AutoAwesome } from "@mui/icons-material";

import generateStoryApi from "../services/generateStoryApi";
import useStoryStore from "../store/storyStore";
import useStoryInputStore from "../store/storyInputStore";

const StoryInput = () => {
  const { setStory } = useStoryStore();
  const { storyInInput, setStoryInInput, isGenerating, setIsGenerating } =
    useStoryInputStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyInInput) return;

    navigate("/board");
  };

  const generateStory = async () => {
    try {
      setIsGenerating(true);
      const result = await generateStoryApi();
      const storyList = result.results;

      // story is list so cant directly set it to input
      setStory(storyList);
      setStoryInInput(storyList.join(" "));
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
        value={storyInInput}
        onChange={(e) => setStoryInInput(e.target.value)}
        multiline
      ></TextField>

      <Button
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
