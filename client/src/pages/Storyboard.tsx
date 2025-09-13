import { useEffect } from "react";
import generateImages from "../services/generateImagesApi";

const StoryboardScreen = () => {
  useEffect(() => {
    (async () => {
      console.log(await generateImages());
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
