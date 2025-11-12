import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

import useStoryInputStore from "../store/storyInputStore";
import { useNavigate } from "react-router-dom";

const SubmitBtn = () => {
  const { storyInInput } = useStoryInputStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyInInput) return;

    navigate("/board");
  };

  return (
    <IconButton type="submit" onClick={handleSubmit}>
      <Send />
    </IconButton>
  );
};

export default SubmitBtn;
