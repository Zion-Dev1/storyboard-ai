import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StoryStore = {
  story: string[];
  setStory: (newStory: string[]) => void;
  addScene: (newScene: string) => void;
};

const useStoryStore = create<StoryStore>()(
  persist(
    (set) => ({
      story: [],
      setStory: (newStory) => set(() => ({ story: newStory })),
      addScene: (newScene) =>
        set((state) => ({ story: [...state.story, newScene] })),
    }),
    {
      name: "storyStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStoryStore;
