<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
    import SettingsWindow from '$lib/components/SettingsWindow.svelte';
    import {authStore} from "../../store/store"

    import { db } from "$lib/firebase";
    import { onSnapshot, updateDoc, getDoc, getDocs, doc, setDoc, collection, arrayUnion, query } from "firebase/firestore";
    import { onMount } from 'svelte';

    let activeWindow = "General Details";
    let previousWindow;

    function changeWindow (e){
        activeWindow = e.target.innerText;
        if(previousWindow){
            previousWindow.style.backgroundColor = "";
            console.log(previousWindow)
        }
        e.target.style.backgroundColor = "#d4d4d4"
        previousWindow = e.target;
    }

    onMount(()=>{
        const startLi = document.querySelector("#start");
        startLi.click()
    })

    let save = async (data) =>{
        await setDoc(doc(db, "users", $authStore.user.uid), {details: data.detail}, {merge: true})
    }

</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen flex flex-col lg:flex-row items-center">
    <div class="w-full lg:w-1/4 pb-14 h-fit lg:h-full bg-gray-50 rounded-xl p-3">
        <h1 class="mt-4 text-2xl font-medium ml-5">Settings</h1>
        <div>
            <ul class="flex flex-row flex-wrap gap-2 lg:flex-col ml-2 mt-6 font-sm font-medium text-gray-700">
                <li on:click={changeWindow} id="start" class="w-1/4 text-center py-2.5 lg:text-left lg:px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">General Details</li>
                <li on:click={changeWindow} class="text-center py-2.5 lg:text-left lg:px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Personal Details</li>
                <li on:click={changeWindow} class="text-center py-2.5 lg:text-left lg:px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Recent Transactions</li>
                <li on:click={changeWindow} class="text-center py-2.5 lg:text-left lg:px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Subscription</li>
                <li on:click={changeWindow} class="text-center py-2.5 lg:text-left lg:px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Payment Methods</li>
            </ul>
        </div>
    </div>

    <div class="h-full w-full lg:flex-1">
        <SettingsWindow {activeWindow} on:save={save}/>        
    </div>
</div>

<style>
    li{
        width: 30%;
    }

    @media (min-width: 1024px) { 
        li{
            width: 75%;
        }
    }
</style>