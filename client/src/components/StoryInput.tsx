import React from "react";
import { useNavigate } from "react-router-dom";

import { TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

import useStoryInputStore from "../store/storyInputStore";
import GenerateStoryBtn from "./GenerateStoryBtn";

const StoryInput = () => {
  const { storyInInput, setStoryInInput } =
    useStoryInputStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyInInput) return;

    navigate("/board");
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

      <GenerateStoryBtn/>

      <IconButton type="submit" onClick={handleSubmit}>
        <Send />
      </IconButton>
    </div>
  );
};

export default StoryInput;
