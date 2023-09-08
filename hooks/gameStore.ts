import {create} from 'zustand';

interface currentGame {
    gameName: string
    route: string
    player1: string
    player2: string
    officiator: string
    setGameName: (by: string) => void
    setRoute: (by: string) => void
    setPlayer1: (by: string) => void
    setPlayer2: (by: string) => void
    setOfficiator: (by: string) => void
}

const useGameStore = create<currentGame>()((set) => ({
    gameName: "Game",
    route: "/",
    player1: "Name1",
    player2: "Name2",
    officiator: "Name3",
    setGameName: (by) => set((state) => ({gameName: by})),
    setRoute: (by) => set((state) => ({route: by})),
    setPlayer1: (by) => set((state) =>({player1: by})),
    setPlayer2: (by) => set((state) =>({player2: by})),
    setOfficiator: (by) => set((state) =>({officiator: by}))
}))

export default useGameStore;