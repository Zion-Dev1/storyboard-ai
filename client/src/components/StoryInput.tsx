import { TextField } from "@mui/material";
import useStoryInputStore from "../store/storyInputStore";

const StoryInput = () => {
  const { storyInInput, setStoryInInput } = useStoryInputStore();

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Type in your story..."
        value={storyInInput.split(". ").join(".\n\n")}
        onChange={(e) => setStoryInInput(e.target.value)}
        multiline
      ></TextField>
    </div>
  );
};

export default StoryInput;
