import { Box, TextField, Typography } from "@mui/material";
import useStoryStore from "../store/storyStore";
import useStoryInputStore from "../store/storyInputStore";

const NumOfSlidesInput = () => {
  const { numOfSlides, setNumOfSlides } = useStoryStore();
  const { isGenerating } = useStoryInputStore();

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const num = Number(val);
    if (val === "" || num >= 1) {
      setNumOfSlides(val);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: 180,
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
        Number of Slides
      </Typography>

      <TextField
        type="number"
        value={numOfSlides}
        onChange={handleNumChange}
        disabled={isGenerating}
      />
    </Box>
  );
};

export default NumOfSlidesInput;
