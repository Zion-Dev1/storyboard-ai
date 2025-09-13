import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";

const StoryboardScreen = () => {
  useEffect(() => {
    (async () => {
      const key = await retreiveImageModelKey();
      console.log(
        await generateImages(
          "The figure descends a winding path, their boots crunching on fallen leaves and loose stones",
          key
        )
      );
    })();
  }, []);

  return (
    <>
      <h1>Storyboard AI</h1>
      <p>Present</p>
    </>
  );
};

export default StoryboardScreen;
