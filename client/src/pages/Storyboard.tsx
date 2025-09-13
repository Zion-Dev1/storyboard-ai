import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";
import useStoryStore from "../store/storyStore";
import useImagesStore from "../store/imagesStore";

const StoryboardScreen = () => {
  const { story } = useStoryStore();
  const { images, addImage } = useImagesStore();

  useEffect(() => {
    (async () => {
      if (!story || story.length === 0) return;

      const key = await retreiveImageModelKey();

      for (const sentence of story) {
        try {
          const imageUrl = await generateImages(sentence, key);
          console.log(sentence);
          addImage(imageUrl);
        } catch (err) {
          console.error("Error generating image for sentence:", sentence, err);
        }
      }
    })();
  }, [story, addImage]);

  return (
    <>
      <h1>Storyboard AI</h1>
      <p>Generating images…</p>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Scene ${index + 1}`}
          width={512}
          height={512}
        />
      ))}
    </>
  );
};

export default StoryboardScreen;
