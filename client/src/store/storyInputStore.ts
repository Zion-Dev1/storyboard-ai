import { create } from "zustand";

type StoryInputStore = {
  storyInInput: string;
  setStoryInInput: (newStory: string) => void;

  isGenerating: boolean;
  setIsGenerating: (newIsGenerating: boolean) => void;
};

const useStoryInputStore = create<StoryInputStore>((set) => ({
  storyInInput: "",
  setStoryInInput: (newStory) => set(() => ({ storyInInput: newStory })),

  isGenerating: false,
  setIsGenerating: (newIsGenerating) =>
    set(() => ({ isGenerating: newIsGenerating })),
}));

export default useStoryInputStore;
