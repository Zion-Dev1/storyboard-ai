import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";

import useStoryStore from "../store/storyStore";
import useImagesStore from "../store/imagesStore";
import useCharacterStore from "../store/characterStore";

const StoryboardScreen = () => {
  const { story, style } = useStoryStore();
  const { character } = useCharacterStore();
  const { images, addImage, isGenerating, setIsGenerating } = useImagesStore();

  useEffect(() => {
    if (!story || story.length === 0 || images.length >= story.length) return;

    const run = async () => {
      const key = await retreiveImageModelKey();
      setIsGenerating(true);

      const results = [];
      for (const sentence of story) {
        const imageUrl = await generateImages(
          sentence,
          story.join(" "),
          character,
          style,
          key
        );
        results.push(imageUrl);
      }

      results.forEach((img) => addImage(img));
      setIsGenerating(false);
    };

    run();
  }, [story, addImage, character, style]);

  return (
    <div>
      <h1>Storyboard AI</h1>
      {isGenerating && (
        <div>
          <CircularProgress />
          Generating...
        </div>
      )}

      {images.map((img, index) => (
        <div key={index}>
          <p>{story[index]}</p>
          <img src={img} alt={story[index]} width={512} height={512} />
        </div>
      ))}
    </div>
  );
};

export default StoryboardScreen;
