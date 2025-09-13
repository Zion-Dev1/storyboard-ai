import { create } from "zustand";

type StoryInputStore = {
  storyInInput: string;
  setStoryInInput: (newStory: string) => void;

  style: string;
  setStyle: (newStyle: string) => void;

  isGenerating: boolean;
  setIsGenerating: (newIsGenerating: boolean) => void;
};

const useStoryInputStore = create<StoryInputStore>((set) => ({
  storyInInput: "",
  setStoryInInput: (newStory) => set(() => ({ storyInInput: newStory })),

  style: "Realistic",
  setStyle: (newStyle) => set(() => ({ style: newStyle })),

  isGenerating: false,
  setIsGenerating: (newIsGenerating) =>
    set(() => ({ isGenerating: newIsGenerating })),
}));

export default useStoryInputStore;
