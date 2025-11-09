import { Button, CircularProgress } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";

import generateStoryApi from "../services/generateStoryApi";
import useStoryStore from "../store/storyStore";
import useStoryInputStore from "../store/storyInputStore";

const GenerateStoryBtn = () => {
  const { setStory } = useStoryStore();
  const { setStoryInInput, isGenerating, setIsGenerating } =
    useStoryInputStore();

  const generateStory = async () => {
    try {
      setIsGenerating(true);
      const result = await generateStoryApi();
      const storyList = result.results;

      // story is list so cant directly set it to input
      setStory(storyList);
      setStoryInInput(storyList.join(" "));
    } catch (err) {
      console.error("Error generating story:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generateStory}
      startIcon={isGenerating ? <CircularProgress /> : <AutoAwesome />}
    >
      Generate
    </Button>
  );
};

export default GenerateStoryBtn;
