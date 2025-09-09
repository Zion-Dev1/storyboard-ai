import { create } from "zustand";

type StoryInputStore = {
  story: string;
  setStory: (newStory: string) => void;
  isGenerating: boolean;
  setIsGenerating: (newIsGenerating: boolean) => void;
};

const useStoryInputStore = create<StoryInputStore>()((set) => ({
  story: "",
  setStory: (newStory) => set(() => ({ story: newStory })),

  isGenerating: false,
  setIsGenerating: (newIsGenerating: boolean) =>
    set(() => ({ isGenerating: newIsGenerating })),
}));

export default useStoryInputStore;
