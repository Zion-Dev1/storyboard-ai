import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StoryStore = {
  story: string[];
  setStory: (newStory: string[]) => void;
  addScene: (newScene: string) => void;

  style: string;
  setStyle: (newStyle: string) => void;

  numOfSlides: string;
  setNumOfSlides: (newNum: string) => void;
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

      numOfSlides: "5",
      setNumOfSlides: (newNum) => set(() => ({ numOfSlides: newNum })),
    }),
    {
      name: "storyStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStoryStore;
