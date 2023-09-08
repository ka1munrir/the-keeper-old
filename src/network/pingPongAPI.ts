import api from "./axiosInstance"

export async function getPPGames(input: string){
    const r = await api.get<getPPGameType[]>("/pingPongGames")
    return r.data;
}
export async function addPPGame(newGame: addPPGameType) {
    const r = await api.post<addPPGameType>("/pingPongGames", newGame);
}