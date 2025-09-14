import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";
import useStoryStore from "../store/storyStore";
import useImagesStore from "../store/imagesStore";

const StoryboardScreen = () => {
  const { story, style } = useStoryStore();
  const { images, addImage } = useImagesStore();

  useEffect(() => {
    (async () => {
      if (!story || story.length === 0 || images.length >= story.length) return;

      const key = await retreiveImageModelKey();

      story.forEach(async (sentence, i) => {
        const imageUrl = await generateImages(
          sentence,
          story.join(" "),
          style,
          key
        );

        addImage(imageUrl);
      });
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
