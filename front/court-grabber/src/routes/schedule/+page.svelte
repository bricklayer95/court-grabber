<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';

    let step = 3;

    let next = () =>{
        step++;
    }

    let back = () =>{
        step--;
    }

    let availableCourts = 6;

    let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    const openTimepicker = (e) => {
        if(e.target.tagName === "SPAN"){
            //e.target.parentElement.nextElementSibling.classList.toggle("hidden")
        }
    }
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
                Conformation Details
            </li>
        </ol>
        {#if step === 1}
            <div class="flex flex-col justify-center items-center w-full mb-10">
                <h1 class="mb-1 mx-8 md:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Schedule a Court</h1>
                <p class="text-gray-600 text-center">Enter a few details about the scheduling</p>
            </div>
                <div class="w-5/6 md:w-3/4 lg:w-1/2 flex flex-col">
                    <div class="mb-6">
                        <label for="startDate" class="block text-sm font-medium leading-6 text-gray-900">What is the name of the event?</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <input type="text" name="eventName" id="eventName" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder="Fun time with friends">
                        </div>
                    </div>

                    <div class="mb-6">
                        <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">What park?</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="relative">
                                <select class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                    <option value="Fever" selected>Freedom</option>
                                    <option value="Flu">Latta</option>
                                    <option value="Food Poisoning">Court #2</option>
                                    <option value="Pink Eye">Court #3</option>
                                    <option value="Strep Throat">Court #4</option>
                                    <option value="Seasonal Allergies">Court #5</option>
                                    <option value="Migraine">Court #6</option>
                                    <option value="Upset Stomach">Court #7</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="mb-10">
                        <label for="numOfFolks" class="block text-sm font-medium leading-6 text-gray-900">How many folks will usually be joining you?</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <input type="number" name="numOfFolks" id="additionalDetails" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder=4 min=0>
                        </div>
                    </div>
                    <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Next</button>
                </div>
        {:else if step === 2}
            <div class="flex flex-col justify-center items-center w-full mb-10">
                <h2 class="mb-1 mx-8 md:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Schedule Courts</h2>
                <p class="text-gray-600 text-center">Enter a few details about the scheduling</p>
            </div>
            <div class="w-5/6 md:w-3/4 lg:w-1/2 flex flex-col">
                <div class="mb-6">
                    <label for="startDate" class="block text-sm font-medium leading-6 text-gray-900">Which courts would you like to reserve?</label>
                    <div class="flex flex-wrap gap-3 mt-2">
                        {#each Array(availableCourts) as _, i}
                            <label for="hs-vertical-radio-checked-in-form" class="w-fit flex p-3 block bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 hover:cursor-pointer">
                                <div class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-vertical-radio-checked-in-form"></div>
                                <span class="text-sm text-gray-500 dark:text-gray-400">Court #{i + 1}</span>
                            </label>
                        {/each} 
                    </div>
                </div>

                <div class="mb-6">
                    <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">How often would you like to book these courts?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="flex flex-wrap gap-3 mt-2">
                            {#each weekDays as day}
                                <div class="nigger flex flex-col" on:click={openTimepicker}>
                                    <label for="w-full h-full hs-vertical-radio-checked-in-form-1" class="w-fit flex p-3 block bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 hover:cursor-pointer">
                                        <div class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-vertical-radio-checked-in-form-1"></div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">{day}</span>
                                    </label>
                                    
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">What time do you want to book the courts?</label>
                    <div class="mt-2 rounded-md shadow-sm">
                        <div class="flex gap-2 mt-1 items-center">
                            <label for="">
                                <span class="text-xs">Start Time</span>
                                <div class="w-fit flex p-2.5 block bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 hover:cursor-pointer shrink-0 mt-0.5 border-gray-200 rounded-full text-gray-500 focus:ring-blue-500">
                                    <select name="" id="" class="outline-none appearance-none bg-transparent">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="02">03</option>
                                    </select>
                                    <span class="px-2">:</span>
                                    <select name="" id="" class="outline-none appearance-none bg-transparent">
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                    </select>
                                    <select name="" id="" class="px-1 outline-none appearance-none bg-transparent">
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </label>
        
                            <span class="text-xl">-</span>
        
                            <label for="">
                                <span class="text-xs">End Time</span>
                                <div class="w-fit flex p-2.5 block bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 hover:cursor-pointer shrink-0 mt-0.5 border-gray-200 rounded-full text-gray-500 focus:ring-blue-500">
                                    <select name="" id="" class="outline-none appearance-none bg-transparent">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="02">03</option>
                                    </select>
                                    <span class="px-2">:</span>
                                    <select name="" id="" class="outline-none appearance-none bg-transparent">
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                    </select>
                                    <select name="" id="" class="px-1 outline-none appearance-none bg-transparent">
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                
                <div class="max-w-sm w-full flex mt-5 gap-1 pr-6 justify-end mb-6 lg:mb-0">
                    <button class="text-black transform p-4 rounded-xl self-end font-semibold" on:click={back}>Back</button>
                    <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Next</button>
                </div>
            </div>
            {:else if step === 3}
            <div class="flex flex-wrap justify-center w-full">
                    <div class="mt-6 flex flex-col justify-center items-center w-full">
                        <h2 class="mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h2>
                        <p class="text-gray-600 text-center mx-6 md:mx-0">How would you like to pay?</p>
                    </div>
        
                    <div class="w-5/6 lg:w-2/5 pt-4 md:pt-6 flex flex-col items-center">
                        <div class="mb-1 w-full">
                            <label for="reason" class="mt-4 block text-sm font-medium leading-6 text-gray-900">How many weeks out would you like to book these courts? (Like how far out for auto booking)</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="relative">
                                    <input type="number" placeholder="3" max="4" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                </div>
                            </div>
                        </div>
                    <div class="w-full">
                        <label for="reason" class="mt-4 block text-sm font-medium leading-6 text-gray-900">Form of payment</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="relative">
                                <select class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                    <option value="Fever" selected>Amex</option>
                                    <option value="Flu">Add Card</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p class="mt-1.5 w-full ml-3 text-xs font-medium leading-6 text-gray-900">You'll be charged... (how often??)</p>

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