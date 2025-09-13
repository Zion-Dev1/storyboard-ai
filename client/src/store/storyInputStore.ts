import { create } from "zustand";

type StoryInputStore = {
  story: string[];
  setStory: (newStory: string[]) => void;
  addScene: (newScene: string) => void;
  isGenerating: boolean;
  setIsGenerating: (newIsGenerating: boolean) => void;
};

const useStoryInputStore = create<StoryInputStore>((set) => ({
  story: [],
  setStory: (newStory) => set(() => ({ story: newStory })),
  addScene: (newScene) =>
    set((state) => ({ story: [...state.story, newScene] })),

  isGenerating: false,
  setIsGenerating: (newIsGenerating) =>
    set(() => ({ isGenerating: newIsGenerating })),
}));

export default useStoryInputStore;
