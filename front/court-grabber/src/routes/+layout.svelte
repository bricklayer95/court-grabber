<script>
    import "../app.css";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

    import { onMount } from "svelte";
    import { auth, db } from "$lib/firebase";
    import { getDoc, doc, setDoc } from "firebase/firestore";
    import { authHandlers, authStore } from "../store/store";
    import SubscriptionHandler from "$lib/components/SubscriptionHandler.svelte"

    const nonAuthRoutes = ["/register", "/login", "/"];

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;

            if(!user && !nonAuthRoutes.includes(currentPath)){
                window.location.href = "/login";
                return;
            }

            if(user && currentPath === "/"){
                window.location.href = "/dashboard";
                return;
            } //or login + register page

            if (!user) {
                return;
            }

            let dataToSetToStore;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                console.log("Creating User");
                const userRef = doc(db, "users", user.uid);
                //SETUP THIS STORE!!!!!!!!
                dataToSetToStore = {
                    email: user.email,
                    subscription: "New User" //Could Be Paid, unpaid, canceled, ect
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                console.log("Fetching User");
                const userData = docSnap.data();
                dataToSetToStore = userData;
            }

            authStore.update((curr) => {
                return {
                    ...curr,
                    user,
                    data: dataToSetToStore,
                    loading: false,
                };
            });
        });
        return unsubscribe;
    });

    if($authStore.user){
        console.log($authStore.data.subscription)
    }
</script>


{#if !$authStore.data.subscription || $authStore.data.subscription === "Paid"}
    <slot />
{:else }
    <SubscriptionHandler status={$authStore.data.subscription}/>
{/if}
    




