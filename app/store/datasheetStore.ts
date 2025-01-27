import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDatasheetStore = create(
  persist(
    (set) => ({
      datasheets: [],
      datasheetId: [],
      setDatasheets: (datasheets: any) =>
        set(() => ({ datasheets: datasheets })),
      setDatasheetId: (datasheetId: any) =>
        set(() => ({ datasheetId: datasheetId })),
    }),
    { name: "datasheets-store" },
  ),
);

export default useDatasheetStore;
