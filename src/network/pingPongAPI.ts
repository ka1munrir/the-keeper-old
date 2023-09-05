import api from "./axiosInstance"

export async function getPPGames(){
    const r = await api.get<getPPGameType[]>("/pingPongGames")
    return r.data;
}