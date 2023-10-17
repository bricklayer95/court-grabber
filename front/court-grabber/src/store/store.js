import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "$lib/firebase";

export const authStore = writable({
    user: null,
    loading: true,
    data: {}
})

export const authHandlers = {
    signup: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    logout: async () => {
        await signOut(auth)
    }
}