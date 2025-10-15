import { create } from "zustand";

interface ProductState {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

export const useStore = create<ProductState>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));
