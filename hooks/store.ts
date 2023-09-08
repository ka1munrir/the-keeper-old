import {create} from 'zustand'

interface LoggedState {
    isLoggedIn: boolean
    pageHeader: string
    change: () => void
    setPageHeader: (by: string) => void
}


const useIsLoggedInStore = create<LoggedState>()((set) => ({
    isLoggedIn: false,
    pageHeader: "",
    change: () => set((state) => ({ isLoggedIn: !state.isLoggedIn})),
    setPageHeader: (by) => set((state) => ({ pageHeader: by}))
}))

export default useIsLoggedInStore;