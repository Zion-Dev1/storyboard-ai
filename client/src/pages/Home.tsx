import StoryInput from "../components/StoryInput";
import StyleDropdown from "../components/StyleDropdown";

const HomeScreen = () => {
  return (
    <>
      <h1>Storyboard AI</h1>
      <p>Bring your story to life and create an AI storyboard</p>
      <StoryInput />
      <StyleDropdown/>
    </>
  );
};

export default HomeScreen;
