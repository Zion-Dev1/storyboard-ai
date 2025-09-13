import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";
import retreiveImageModelKey from "../utils/retreiveImageModelKey";

const StoryboardScreen = () => {
  useEffect(() => {
    (async () => {
      const key = await retreiveImageModelKey();
      console.log(await generateImages(key));
    })();
    console.log("Storyboard Screen Loaded");
  }, []);

  return (
    <>
      <h1>Storyboard AI</h1>
      <p>Present</p>
    </>
  );
};

export default StoryboardScreen;
