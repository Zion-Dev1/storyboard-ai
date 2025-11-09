import { TextField } from "@mui/material";
import useStoryStore from "../store/storyStore";

const NumOfSlidesInput = () => {
  const { numOfSlides, setNumOfSlides } = useStoryStore();

  return (
    <div>
      <h3>Number of slides to generate</h3>

      <TextField
        onChange={(e) => {
          const val = e.target.value;
          const num = Number(val);
          if (val === "" || num >= 1) {
            setNumOfSlides(val);
          }
        }}
        value={numOfSlides}
        type="number"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
    </div>
  );
};

export default NumOfSlidesInput;
