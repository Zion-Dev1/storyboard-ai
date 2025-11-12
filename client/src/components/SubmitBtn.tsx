import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

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
    <IconButton
      type="submit"
      onClick={handleSubmit}
      sx={{
        backgroundColor: "#e0e0e0",
        color: "#333",
        borderRadius: "full",
        
        "&:hover": {
          backgroundColor: "#d5d5d5",
        },
      }}
    >
      <ArrowUpward />
    </IconButton>
  );
};

export default SubmitBtn;
