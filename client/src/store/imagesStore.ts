import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ImagesStore = {
  images: string[];
  addImage: (newImage: string) => void;
};

const useImagesStore = create<ImagesStore>()(
  persist(
    (set) => ({
      images: [],
      addImage: (newImage) =>
        set((state) => ({ images: [...state.images, newImage] })),
    }),
    {
      name: "imagesStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useImagesStore;
