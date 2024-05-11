import { create } from "zustand"

interface useProModalStore {
    isOpen: boolean;
    open: () => void;
    onClose: () =>  void;
}

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: true,
    open: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false})
}))