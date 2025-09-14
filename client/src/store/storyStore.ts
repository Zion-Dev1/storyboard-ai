import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StoryStore = {
  story: string[];
  setStory: (newStory: string[]) => void;
  addScene: (newScene: string) => void;

  style: string;
  setStyle: (newStyle: string) => void;
};

const useStoryStore = create<StoryStore>()(
  persist(
    (set) => ({
      story: [],
      setStory: (newStory) => set(() => ({ story: newStory })),
      addScene: (newScene) =>
        set((state) => ({ story: [...state.story, newScene] })),
      
      style: "Realistic",
      setStyle: (newStyle) => set(() => ({ style: newStyle })),
    }),
    {
      name: "storyStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStoryStore;
