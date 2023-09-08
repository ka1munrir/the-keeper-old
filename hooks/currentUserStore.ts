'use client'
import {create} from 'zustand'

interface currentUserStore{
    currentUser: getUserType
    logOut: () => void
    logIn: (by: getUserType) => void

}

const useCurrentUserStore = create<currentUserStore>()((set) => ({
    currentUser: {
        "id": 1,
        "firstName": "firstName",
        "lastName": "lastName",
        "email": "email@email.com",
        "userName": "username",
        "password": "password"
      },
    logOut: () => set((state) => ({ currentUser: {
        "id": 1,
        "firstName": "firstName",
        "lastName": "lastName",
        "email": "email@email.com",
        "userName": "username",
        "password": "password"
      }})),
    logIn: (by) => set((state) => ({ currentUser: by}))
}))

export default useCurrentUserStore;