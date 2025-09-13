import HomeScreen from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryboardScreen from "./pages/Storyboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<HomeScreen />} />
        <Route path="/" element={<StoryboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
