import StoryInput from "../components/StoryInput";
import StyleDropdown from "../components/StyleDropdown";
import GenerateStoryBtn from "../components/GenerateStoryBtn";
import NumOfSlidesInput from "../components/NumOfSlidesInput";

import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import useStoryInputStore from "../store/storyInputStore";

const HomeScreen = () => {
  const { storyInInput } = useStoryInputStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyInInput) return;

    navigate("/board");
  };

  return (
    <>
      <h1>Storyboard AI</h1>
      <p>Bring your story to life and create an AI storyboard</p>
      <NumOfSlidesInput />

      <StoryInput />
      <GenerateStoryBtn />

      <IconButton type="submit" onClick={handleSubmit}>
        <Send />
      </IconButton>
      <StyleDropdown />
    </>
  );
};

export default HomeScreen;
