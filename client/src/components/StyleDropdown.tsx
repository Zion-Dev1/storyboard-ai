import { FormControl, Select, MenuItem, Typography } from "@mui/material";

import useStoryStore from "../store/storyStore";

const StyleDropdown = () => {
  const { style, setStyle } = useStoryStore();
  const storyboardStyles = [
    "Cinematic",
    "Anime",
    "Watercolor",
    "Comic Book",
    "Realistic",
    "Noir",
    "Oil Painting",
    "Cyberpunk",
    "Pixel art",
    "Steampunk",
  ];

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <Typography variant="subtitle2" sx={{ mb: 0.5, textAlign: "left" }}>
        Choose a style
      </Typography>
      <Select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        defaultValue="Realistic"
        sx={{ textAlign: "left" }}
      >
        {storyboardStyles.map((style) => (
          <MenuItem key={style} value={style}>
            {style}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StyleDropdown;
