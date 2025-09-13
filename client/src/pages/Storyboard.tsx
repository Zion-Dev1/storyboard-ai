import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";
import useStoryStore from "../store/storyStore";
import useImagesStore from "../store/imagesStore";
import useStoryInputStore from "../store/storyInputStore";

const StoryboardScreen = () => {
  const { story } = useStoryStore();
  const { images, addImage } = useImagesStore();
  const { style } = useStoryInputStore();

  useEffect(() => {
    (async () => {
      if (!story || story.length === 0 || images.length >= story.length) return;

      const key = await retreiveImageModelKey();

      for (const sentence of story) {
        try {
          const imageUrl = await generateImages(sentence, style, key);
          addImage(imageUrl);
        } catch (err) {
          console.error("Error generating image for sentence:", sentence, err);
        }
      }
    })();
  }, [story, addImage]);

  return (
    <div>
      <h1>Storyboard AI</h1>
      <p>Generating images…</p>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={story[index]}
          width={512}
          height={512}
        />
      ))}
    </div>
  );
};

export default StoryboardScreen;
