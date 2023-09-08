import api from "./axiosInstance";

export async function getUsers(input: string){
    const r = await api.get<getUserType[]>("/users")
    return r.data;
}

export async function addUser(newUser: addUserType) {
    const r = await api.post<addUserType>("users", newUser);
}