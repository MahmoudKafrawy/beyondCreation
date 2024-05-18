import { create } from "zustand";

type Store = {
  query: string;
  setQuery: (value: string) => void;
};

export const useQueryStore = create<Store>()((set) => ({
  query: "",
  setQuery: (value: string) => set((state) => ({ query: value })),
}));
