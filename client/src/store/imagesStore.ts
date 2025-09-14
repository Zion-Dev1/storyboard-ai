import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ImagesStore = {
  images: string[];
  addImage: (newImage: string) => void;

  isGenerating: boolean;
  setIsGenerating: (newIsGenerating: boolean) => void;
};

const useImagesStore = create<ImagesStore>()(
  persist(
    (set) => ({
      images: [],
      addImage: (newImage) =>
        set((state) => ({ images: [...state.images, newImage] })),

      isGenerating: false,
      setIsGenerating: (newIsGenerating) =>
        set(() => ({ isGenerating: newIsGenerating })),
    }),
    {
      name: "imagesStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useImagesStore;
