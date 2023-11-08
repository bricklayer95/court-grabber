<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
    import SettingsWindow from '$lib/components/SettingsWindow.svelte';
    import {authStore} from "../../store/store"

    import { db } from "$lib/firebase";
    import { onSnapshot, updateDoc, getDoc, getDocs, doc, setDoc, collection, arrayUnion, query } from "firebase/firestore";

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

    let save = async (data) =>{
        await setDoc(doc(db, "users", $authStore.user.uid), {details: data.detail}, {merge: true})
    }

</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen flex">
    <div class="w-1/4 h-full bg-gray-100 rounded-xl p-3">
        <div>
            <h2 class="text-gray-500 flex items-center text-lg mt-2"><img class="h-6 w-auto mr-2" src="https://img.icons8.com/fluency-systems-filled/100/888888/country-house.png" alt=""> General Setting</h2>
            <ul class="flex flex-col gap-5 ml-2 mt-6 font-sm font-medium text-gray-700">
                <li on:click={changeWindow} class="w-3/4 py-2.5 px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">General Details</li>
                <li on:click={changeWindow} class="w-3/4 py-2.5 px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Personal Details</li>
            </ul>

        </div>

        <div class="mt-20">
            <h2 class="text-gray-500 flex items-center text-lg mt-2"><img class="h-6 w-auto mr-2" src="https://img.icons8.com/ios-filled/100/888888/wallet.png" alt=""> Billing / Payments </h2>
            <ul class="flex flex-col gap-5 ml-2 mt-6 font-sm font-medium text-gray-700">
                <li on:click={changeWindow} class="w-3/4 py-2.5 px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Recent Transactions</li>
                <li on:click={changeWindow} class="w-3/4 py-2.5 px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Subscription</li>
                <li on:click={changeWindow} class="w-3/4 py-2.5 px-4 hover:bg-gray-300 hover:cursor-pointer rounded-lg transition-all">Payment Methods</li>
            </ul>
        </div>
    </div>

    

    <div class="h-full flex-1">
        <SettingsWindow {activeWindow} on:save={save}/>        
    </div>
</div>

