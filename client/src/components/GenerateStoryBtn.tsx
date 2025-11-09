import { Button, CircularProgress } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";

import generateCharacterApi from "../services/generateCharacterApi";
import generateStoryApi from "../services/generateStoryApi";

import useStoryStore from "../store/storyStore";
import useStoryInputStore from "../store/storyInputStore";
import useCharacterStore from "../store/characterStore";

const GenerateStoryBtn = () => {
  const { setStory } = useStoryStore();
  const { character, setCharacter } = useCharacterStore();
  const { setStoryInInput, isGenerating, setIsGenerating } =
    useStoryInputStore();

  const generateStory = async (character: String) => {
    const result = await generateStoryApi(character);
    const storyList = result.results;

    setStory(storyList);
    setStoryInInput(storyList.join(" "));
  };

  const generateCharacter = async () => {
    const result = await generateCharacterApi();
    const character = result.results;

    setCharacter(character);
  };

  return (
    <Button
      onClick={async () => {
        try {
          setIsGenerating(true);
          await generateCharacter();
          await generateStory(character);
        } catch (err) {
          console.error("Error generating content:", err);
        } finally {
          setIsGenerating(false);
        }
      }}
      startIcon={isGenerating ? <CircularProgress /> : <AutoAwesome />}
    >
      Generate Story with AI
    </Button>
  );
};

export default GenerateStoryBtn;
