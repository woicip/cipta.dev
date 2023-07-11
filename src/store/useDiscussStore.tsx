import { create } from 'zustand'

interface DiscussState {
    discuss: boolean,
    openDiscuss: Function,
    closeDiscuss: Function
}

const useDiscussStore = create<DiscussState>((set) => ({
    discuss: false,
    openDiscuss: () => set((state: { discuss: boolean }) => ({ discuss: true })),
    closeDiscuss: () => set((state: { discuss: boolean }) => ({ discuss: false }))
}))

export default useDiscussStore