import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FactionStore {
  faction: any | null;
  setFaction: (faction: any) => void;
}

const useFactionStore = create<any>(
  persist(
    (set) => ({
      faction: null,
      setFaction: (newFaction: any) =>
        set((state: any) => {
          if (newFaction !== state.faction) {
            return { faction: newFaction };
          }

          return { faction: state.faction };
        }),
    }),
    {
      name: "faction-storage", // name of the item in the storage (must be unique)
    },
  ),
);

export default useFactionStore;
