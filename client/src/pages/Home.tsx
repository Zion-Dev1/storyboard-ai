import StoryInput from "../components/StoryInput";
import StyleDropdown from "../components/StyleDropdown";
import NumOfSlidesInput from "../components/NumOfSlidesInput";
import { Box, Typography } from "@mui/material";

const HomeScreen = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6, textAlign: "center" }}>
      <Typography variant="h2" fontWeight="900">
        Storyboard AI
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Bring your story to life and create an AI storyboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 2,
          mb: 3,
        }}
      >
        <NumOfSlidesInput />
        <StyleDropdown />
      </Box>

      <StoryInput />
    </Box>
  );
};

export default HomeScreen;
