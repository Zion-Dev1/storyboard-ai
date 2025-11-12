import { InputAdornment, TextField } from "@mui/material";
import GenerateStoryBtn from "./GenerateStoryBtn";
import SubmitBtn from "./SubmitBtn";

import useStoryInputStore from "../store/storyInputStore";

const StoryInput = () => {
  const { storyInInput, setStoryInInput } = useStoryInputStore();

  return (
    <TextField
      fullWidth
      placeholder="Type in your story..."
      value={storyInInput.split(". ").join(".\n\n")}
      onChange={(e) => setStoryInInput(e.target.value)}
      multiline
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <GenerateStoryBtn />
              <SubmitBtn />
            </InputAdornment>
          ),
        },
      }}
    ></TextField>
  );
};

export default StoryInput;
