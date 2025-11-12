import { Button, CircularProgress } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";

import generateCharacterApi from "../services/generateCharacterApi";
import generateStoryApi from "../services/generateStoryApi";

import useStoryStore from "../store/storyStore";
import useStoryInputStore from "../store/storyInputStore";
import useCharacterStore from "../store/characterStore";

const GenerateStoryBtn = () => {
  const { numOfSlides, setStory } = useStoryStore();
  const { setCharacter } = useCharacterStore();
  const { setStoryInInput, isGenerating, setIsGenerating } =
    useStoryInputStore();

  const generateStory = async (character: String) => {
    const result = await generateStoryApi(character, numOfSlides);
    const storyList = result.results;

    setStory(storyList);
    setStoryInInput(storyList.join(" "));
  };

  const generateCharacter = async () => {
    const result = await generateCharacterApi();
    const character = result.results;

    setCharacter(character);
    return character;
  };

  return (
    <Button
      onClick={async () => {
        try {
          setIsGenerating(true);
          const char = await generateCharacter();

          await generateStory(char);
        } catch (err) {
          console.error("Error generating content:", err);
        } finally {
          setIsGenerating(false);
        }
      }}
      startIcon={isGenerating ? <CircularProgress size="small"/> : <AutoAwesome />}
    >
      Generate
    </Button>
  );
};

export default GenerateStoryBtn;
