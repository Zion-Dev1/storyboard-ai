import { Box, TextField } from "@mui/material";
import GenerateStoryBtn from "./GenerateStoryBtn";
import SubmitBtn from "./SubmitBtn";
import useStoryInputStore from "../store/storyInputStore";

const StoryInput = () => {
  const { storyInInput, setStoryInInput } = useStoryInputStore();

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextField
        fullWidth
        multiline
        placeholder="Type in your story..."
        value={storyInInput.split(". ").join(".\n\n")}
        onChange={(e) => setStoryInInput(e.target.value)}
        sx={{
          "& textarea": {
            paddingBottom: "60px",
            paddingRight: "16px",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            borderWidth: "2px",
            borderColor: "grey.400",
            "&:hover fieldset": {
              borderColor: "grey.600",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: 2,
          p: 0.5,
        }}
      >
        <GenerateStoryBtn />
        <SubmitBtn />
      </Box>
    </Box>
  );
};

export default StoryInput;
