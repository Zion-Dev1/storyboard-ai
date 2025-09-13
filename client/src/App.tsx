import HomeScreen from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryboardScreen from "./pages/Storyboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/board" element={<StoryboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
