import { create } from "zustand";

type ImagesStore = {
  images: string[];
  addImage: (newImage: string) => void;
};

const useImagesStore = create<ImagesStore>((set) => ({
  images: [],
  addImage: (newImage) =>
    set((state) => ({ images: [...state.images, newImage] })),
}));

export default useImagesStore;
