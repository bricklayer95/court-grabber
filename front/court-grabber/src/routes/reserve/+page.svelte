<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
    import { onMount } from 'svelte';
    import { db } from "$lib/firebase";
    import { onSnapshot, updateDoc, getDoc, getDocs, doc, setDoc, collection, arrayUnion } from "firebase/firestore";
    import {months} from "$lib/utils.js";
    import {authStore} from "../../store/store";
    import Calendar from '$lib/Calendar.svelte';


    //Variables
    let curDate = new Date();
    let currentMonth = curDate.getMonth();
    let startDate = "10-8-23"; //use request.date to track everything even default
    let step = 1;
    let defaultCourt;
    let availableSlots;
    let data;
    let loading = false;
    let courts;
    let request = {
        name: "",
        park: "Latta", //Default Park Set to Latta
        players: null,
        court: "",
        timeSlots: [],
        date: "",
        payment: "",
    }

    let addTimeSlot = (slot) => {
        request.timeSlots.push(slot);
        request = request;
    }

    let selectDate = (day)=>{
        request.date = day;
        try{
            getDoc(doc(db, request.park, request.date)).then(res =>{
                    loading = true;
                    data = res.data();
                    defaultCourt = Object.values(data)[0];
                    //SORT FOR ORDER OF TIME
                    availableSlots = Object.keys(defaultCourt.timeslots).filter((timeslot) => !defaultCourt.timeslots[timeslot].booked);
                    courts = Object.keys(data);
                    loading = false;
                })
        }catch(err){
            console.log("An Error Occured")
        }
    }

    let next = async () =>{
        if(step === 1 && request.name === "" || request.park === "" || request.players === null){
            alert("Please fill out all fields to continue");
            return;
        }

        if(step === 2 && request.court === "" || request.timeSlots == []){
            alert("Please fill out all fields to continue");
            return;
        }

        if(step === 3 && request.payment === ""){
            alert("Please fill out all fields to continue");
            return;
        }

        if(step === 1){
            loading = true;
            

            getDoc(doc(db, request.park, startDate)).then(res =>{
                data = res.data();
                defaultCourt = Object.values(data)[0];
                //SORT FOR ORDER OF TIME
                availableSlots = Object.keys(defaultCourt.timeslots).filter((timeslot) => !defaultCourt.timeslots[timeslot].booked);
                courts = Object.keys(data);
                loading = false;
                step++;
            })
            return;
        }

        //Is this nescessary??
        /*if(step === 2){
            request.date = `${months[currentMonth].month} ${selectedDay + 1}, 2023`;
        }*/

        if(step === 3){
            const docRef = doc(db, request.park, startDate);
            const unsubscribe = onSnapshot(docRef, async (snapshot) => {
                let liveData = snapshot.data();
                let liveCourt = Object.values(liveData)[request.court - 1];
                let courtName = Object.keys(liveData)[request.court - 1];

                let good = true;

                for(let slot of request.timeSlots){
                    if(liveCourt.timeslots[slot].booked === true){
                        good = false;
                        console.log(slot, "Already been booked");
                        //modal appears, sorry someone booked this court in the last 30s, dont worry your card did not get charged. Book another court button goes back to step 2, to find another court
                        return;
                    }
                }

                console.log(request.timeSlots);

                for(let slot of request.timeSlots){
                    liveCourt.timeslots[slot] = {
                        time: slot,
                        booked: true,
                        user: $authStore.user.uid,
                        name: $authStore.data.name,
                    }
                }

                let courtObj = {};
                courtObj[courtName] = { timeslots: liveCourt.timeslots };
                console.log(courtObj)
                
                await updateDoc(docRef, courtObj)
            });

            await updateDoc(doc(db, "users", $authStore.user.uid), {
                bookedCourts: arrayUnion(request)
            })
        }

        step++;
    }

    let back = () =>{
        step--;
    }


    

    $: {
        if(request.court){
            let selectedCourt = Object.values(data)[request.court - 1];
            //SORT FOR ORDER OF TIME 
            //Does Below Make Any Sense????? Check
            availableSlots = Object.keys(selectedCourt.timeslots).filter((timeslot) => !selectedCourt.timeslots[timeslot].booked);
        }
    };

</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen">
    <div class="flex items-center justify-center content-center flex-col">
        <ol class="ol hidden md:flex md:w-1/2 text-sm font-medium text-center text-black sm:text-base mx-auto mb-10">
            <li class="flex md:w-full items-center text-green-600 dark:text-green-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    Booking<span class="hidden sm:inline-flex sm:ml-2">Details</span>
                </span>
            </li>
            <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span class="mr-2">Date</span>&
                    <span class="hidden sm:inline-flex sm:ml-2">Time</span>
                </span>
            </li>
            <li class="flex items-center">
                <span class="mr-2">3</span>
                Conformation
            </li>
        </ol>
        {#if step === 1}
        <div class="flex flex-col justify-center items-center w-full mb-10">
            
            <h1 class="mb-1 mx-8 md:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h1>
            <p class="text-gray-600 text-center">Enter a few details about the reservation</p>
        </div>
            <div class="w-5/6 md:w-3/4 lg:w-1/2 flex flex-col">
                <div class="mb-6">
                    <label for="startDate" class="block text-sm font-medium leading-6 text-gray-900">What is the name of the event?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input bind:value={request.name} type="text" name="eventName" id="eventName" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder="Fun time with friends">
                    </div>
                </div>

                <div class="mb-6">
                    <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">What park?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="relative">
                            <select bind:value={request.park} class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                <option value="Latta">Latta Park</option>
                                <option value="Freedom">Freedom Park</option>
                                <option value="Veterans">Veterans Park</option>
                                <option value="Jeff Adams">Jeff Adams</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="mb-10">
                    <label for="numOfFolks" class="block text-sm font-medium leading-6 text-gray-900">How many folks will be joining you?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input bind:value={request.players} type="number" name="numOfFolks" id="additionalDetails" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder=2 min=0>
                    </div>
                </div>
                <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>
                    {#if loading === false}
                        Next
                    {:else}
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    {/if}
                </button>
            </div>

        {:else if step === 2}
            <div class="flex flex-wrap w-full">
            <div class="flex flex-col justify-center items-center w-full">
                <h2 class="mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h2>
                <p class="text-gray-600 text-center mx-6 md:mx-0">Select which date & time you would like to book (helper text)</p>
            </div>

                <div class="w-full lg:w-1/2 pt-4 md:pt-6 flex flex-col items-center lg:items-end">
                    <div class="mb-4 lg:mb-3 w-5/6">
                        <label for="reason" class="block font-medium text-sm leading-6 text-gray-900">Court</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="relative">
                                {#if loading === false}
                                    <select bind:value={request.court} class="block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                        <option value="Any">Any Court</option>
                                        {#each courts as court, i}
                                            <option value="{i + 1}">{court}</option>
                                        {/each}
                                    </select>
                                {:else}
                                    <div role="status">
                                        <svg aria-hidden="true" class="inline w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                {/if}
                            </div>
                        </div>
                        <a class="pl-2 text-sm font-medium text-blue-600 underline" href="">Add Court</a>
                    </div>

                    <div class="grid space-y-2 w-5/6">
                        <p class="mt-3 mb-1 font-medium text-md leading-6 text-gray-900" >Available Times {availableSlots.length > 1 ? "(Select as many as you would like)" : ""}</p>
                        {#if availableSlots}
                            {#each availableSlots as slot, i}
                                {#if loading === false}
                                    <label for={slot} class="flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                                        <input on:click={()=>{addTimeSlot(slot)}} type="radio" name={slot} class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id={slot}>
                                        <span class="text-md text-gray-500 ml-3">{slot}</span>
                                    </label>
                                {:else}
                                    <div role="status">
                                        <svg aria-hidden="true" class="inline w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                {/if}
                            {/each}
                        {:else}
                            <h1>No Available Slots Sorry About that</h1>
                        {/if}
                    </div>
                    
                </div>

                <div class="w-full lg:w-1/2 pt-10">
                    <div class="flex flex-col justify-center items-center px-4 lg:px-14">
                        <Calendar availableDates={data} on:selectDate={(e)=>{selectDate(e.detail.date)}}/>
                    </div>
                    <div class="max-w-sm w-full flex mt-5 gap-1 pr-6 justify-end mb-6 lg:mb-0">
                        <button class="text-black transform p-4 rounded-xl self-end font-semibold" on:click={back}>Back</button>
                        <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Next</button>
                    </div>
                </div>
            </div>
                          
        {:else if step === 3}
            <div class="flex flex-wrap justify-center w-full">
                    <div class="mt-6 flex flex-col justify-center items-center w-full">
                        <h2 class="mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h2>
                        <p class="text-gray-600 text-center mx-6 md:mx-0">How would you like to pay?</p>
                    </div>
        
                    <div class="w-5/6 lg:w-2/5 pt-4 md:pt-6 flex flex-col items-center">
                    <div class="mb-6 w-full">
                        <label for="reason" class="mt-4 block text-sm font-medium leading-6 text-gray-900">Form of payment</label>
                        <div class="mb-1 relative mt-2 rounded-md shadow-sm">
                            <div class="relative">
                                <select bind:value={request.payment} class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                    <option value="Stipe Code for this specific card" selected>Amex 4312</option>
                                </select>
                            </div>
                        </div>
                        <a class="pl-2 text-sm font-medium text-blue-600 underline" href="">Add Card</a>
                    </div>

                    <div class="max-w-sm w-full flex mt-5 gap-1 pr-6 justify-end mb-6 lg:mb-0">
                        <button class="text-black transform p-4 rounded-xl self-end font-semibold" on:click={back}>Back</button>
                        <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Book Court</button>
                    </div>
                </div>
            </div>
                
        {:else if step === 4}
            <div class="h-full w-full">
                <div class="flex flex-col justify-center items-center w-full h-full">
                    <img class="mt-10 w-24 h-24 mb-6" src="https://img.icons8.com/color/200/checked--v1.png" alt="">
                    <h2 class="mb-4 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Court Is Sucessfully Booked</h2>
                    <p class="text-gray-600 text-center text-xl mx-2 mb-12 md:mx-14">Your Court Has Sucessfully Been Reserved and a conformation has been sent to your email. Thank you for using Court Booker!</p>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                        <p class="font-normal text-gray-600">Subtotal: $5.00</p>
                        <p class="font-normal text-gray-600">Total: $5.00</p>
                    </a>
                </div>
            </div>
        {/if}


    </div>
</div>

<style>

    
</style>