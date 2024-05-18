import { create } from "zustand";

type Store = {
  query: string;
  setQuery: (value: string) => void;
  filters: { dateRange: any; category: any };
  setFilters: (value: { [x: string]: any }) => void;
  clearFilters: () => void;
};

export const useQueryStore = create<Store>()((set) => ({
  query: "",
  setQuery: (value: string) => set(() => ({ query: value })),
  filters: { dateRange: {}, category: "" },
  setFilters: (value: { [x: string]: string }) => set((state) => ({ filters: { ...state.filters, ...value } })),
  clearFilters: () => set(() => ({ filters: { dateRange: {}, category: "" } })),
}));
