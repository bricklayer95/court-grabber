<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    import {months} from "$lib/utils.js";
    import { db } from "$lib/firebase";
    import { getDoc, doc,} from "firebase/firestore";

    //Variables
    export let availableDates;
    console.log(availableDates)
    let curDate = new Date();
    let currentMonth = curDate.getMonth();
    let selectedDay = curDate.getDate();


    //Functions
    let nextMonth = () =>{
        if(currentMonth < 11){
            currentMonth++
        } else{
            currentMonth = 0
        }
    }
    let backMonth = () =>{
        if(currentMonth > 0){
            currentMonth--
        } else{
            currentMonth = 11;
        }
    }

    let selectDate = (day)=>{
        selectedDay = day;
        dispatch("selectDate", {
            date: `${10}-${day + 1}-23`, //change to `${currentMonth + 1}-${day + 1}-23`
        });
    }
</script>


    <p class="md:max-w-md lg:max-w-sm w-full text-left block font-medium text-sm leading-6 text-gray-900">Select the Date</p>
    <div class="mt-2 md:max-w-md lg:max-w-sm w-full shadow-lg">
        <div class="md:p-8 p-5 bg-white rounded-t">
            <div class="px-4 flex items-center justify-between">
                <span tabindex="0" class="focus:outline-none text-base font-bold text-gray-100 text-gray-800">{months[currentMonth].month} 2023</span>
                <div class="flex items-center">
                    <button on:click={backMonth} aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </button>
                    <button on:click={nextMonth} aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between pt-10 overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Mo</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Tu</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">We</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Th</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Fr</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Sa</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 text-gray-100">Su</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each Array(months[currentMonth].days).fill(0) as _, i}
                            {#if i % 7 === 0}
                                <tr>
                            {/if}
                            <td class="pt-6" on:click={()=>{selectDate(i)}}>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                {#if i + 1 <= months[currentMonth].days}
                                    {#if i === selectedDay}
                                        <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-600 hover:bg-green-600 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">{i + 1}</a>
                                    {:else}
                                        <p class="text-base text-gray-500 font-medium">{i + 1}</p>
                                    {/if}
                                {/if}
                                </div>
                            </td>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
