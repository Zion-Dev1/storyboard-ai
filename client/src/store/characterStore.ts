import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CharacterStore = {
  character: string;
  setCharacter: (newCharacter: string) => void;
};

const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      character: '',
      setCharacter: (newCharacter) => set(() => ({ character: newCharacter })),
    }),
    {
      name: "characterStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCharacterStore;
