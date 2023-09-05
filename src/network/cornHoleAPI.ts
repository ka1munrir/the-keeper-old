import api from './axiosInstance'

export async function getCHGames(){
    const r = await api.get<getPPGameType[]>("/cornHoleGames")
    return r.data; 
}