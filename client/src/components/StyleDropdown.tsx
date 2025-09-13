import { FormControl, Select, MenuItem } from "@mui/material";

import useStoryInputStore from "../store/storyInputStore";

const StyleDropdown = () => {
  const { style, setStyle } = useStoryInputStore();
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
    <div>
      <h3>Choose a style</h3>
      <FormControl>
        <Select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          defaultValue="Realistic"
        >
          {storyboardStyles.map((style) => (
            <MenuItem key={style} value={style}>
              {style}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default StyleDropdown;
