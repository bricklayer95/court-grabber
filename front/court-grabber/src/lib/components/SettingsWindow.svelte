<script>
    export let activeWindow;
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    import { slide } from 'svelte/transition';

    let notificationOpen = false;

    let data = {
        username: "",
        about: "",
        firstName: "",
        email: "",
        lastName: "",
        country: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: ""
    };

    const save = () => {
        let obj = {};
        for (let key in data) {
            if (data[key] !== "") {
                obj[key] = data[key];
            }
        }
        dispatch('save', obj);
        notificationOpen = true;
        setTimeout(() => {
            notificationOpen = false;
        }, 3000)
    }
</script>


{#if notificationOpen}
    <div transition:slide class="ml-auto mb-10 w-5/6 p-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
        <span class="font-medium">Settings changed successfully!</span>
    </div>
{/if}

{#if activeWindow === "General Details"}
    <div class="flex w-full justify-between mt-2">
        <div class="ml-14">
            <h1 class="text-xl font-semibold">General Details</h1>
            <p class="text-gray-500 mr-10 text-sm">The settings below are completely optional, but will help to build a stronger profile.</p>
        </div>

        <div class="flex">
            <button type="button" class="text-gray-800 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel</button>
            <button on:click={save} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
    </div>

    <div class="ml-16 mt-12 w-3/4">
        <form>
            <div class="space-y-12">
            <div class="">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input bind:value={data.username} type="text" name="username" id="username" autocomplete="username" class="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                    </div>
                    </div>
                </div>
        
                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                    <div class="mt-2">
                    <textarea bind:value={data.about} id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>
        
                <div class="col-span-full">
                    <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                    <div class="mt-2 flex items-center gap-x-3">
                    <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

{:else if activeWindow === "Personal Details"}
    <div class="flex w-full justify-between mt-2">
        <div class="ml-14">
            <h1 class="text-xl font-semibold">Personal Details</h1>
            <p class="text-gray-500 text-sm mr-10">The settings below are completely optional, but will help to build a stronger profile.</p>
        </div>

        <div class="flex">
            <button type="button" class="text-gray-800 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel</button>
            <button on:click={save} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
    </div>

    <div class="ml-16 mt-12 w-3/4">
        <form>
            <div class="space-y-12">
            <div>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div class="mt-2">
                    <input bind:value={data.firstName} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <div class="mt-2">
                    <input bind:value={data.lastName} type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                    <input bind:value={data.email} id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <div class="mt-2">
                    <select on:change={data.country} id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    </div>
                </div>
        
                <div class="col-span-full">
                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                    <div class="mt-2">
                    <input bind:value={data.streetAddress} type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-2 sm:col-start-1">
                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div class="mt-2">
                    <input bind:value={data.city} type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-2">
                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                    <div class="mt-2">
                    <input bind:value={data.state} type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                    <div class="mt-2">
                    <input bind:value={data.zip} type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>

{:else if activeWindow === "Recent Transactions"}
    <div class="flex w-full justify-between mt-2">
        <div class="ml-14">
            <h1 class="text-xl font-semibold">Recent Transactions</h1>
            <p class="text-gray-500 text-sm mr-10">Check here to your most recent transactions</p>
        </div>

        <div class="flex">
            <button type="button" class="text-gray-800 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel</button>
            <button on:click={save} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
    </div>

    <div class="ml-16 mt-12 w-3/4">
            <div class="w-5/6 mt-8 md:mt-3 flex flex-wrap gap-6 pb-10">
                <a href="#" class="block max-w-sm p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                    <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                    <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
                    <a href="#" class="flex text-blue-600 gap-2 underline justify-end mt-1">View Details</a> <!--Only Keep this if Stripe has way for customer to view more details on transaction-->
                </a>
                
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Standard Monthly Subscription</h5>
                    <p class="font-normal text-gray-600 mb-3">Total: $30.00</p>
                    <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
                    <a href="#" class="flex text-blue-600 gap-2 underline justify-end mt-1">View Details</a> <!--Only Keep this if Stripe has way for customer to view more details on transaction-->
                </a>
            </div>
    </div>

{:else if activeWindow === "Subscription"}
    <div class="flex w-full justify-between mt-2">
        <div class="ml-14">
            <h1 class="text-xl font-semibold">Subscription</h1>
            <p class="text-gray-500 text-sm mr-10">Manage your subscription here</p>
        </div>

        <div class="flex">
            <button type="button" class="text-gray-800 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel</button>
            <button on:click={save} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
    </div>

    <div class="ml-16 mt-10">
        <main class="relative flex flex-col justify-center h-full">
            <div class="w-full h-full flex flex-col items-center justify-center">
            
                <div>
                    <h3 class="text-xl font-semibold mb-6">Plan Options</h3>
                    <div class="flex flex-wrap justify-center items-center gap-8 h-1/2">
                
                        <!-- Pricing tab 1 -->
                        <div class="max-w-xs h-full">                                
                            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                                <div class="mb-5">
                                    <div class="text-slate-900 font-semibold mb-1">Essential</div>
                                    <div class="inline-flex items-baseline mb-2">
                                        <span class="text-slate-900 font-bold text-3xl">$</span>
                                        <span class="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                                        <span class="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div class="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                    <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150" href="#0">
                                        Change Plan
                                    </a>
                                </div>
                                <div class="text-slate-900 font-medium mb-3">Includes:</div>
                                <ul class="text-slate-600 text-sm space-y-3 grow">
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                        <!-- Pricing tab 2 -->
                        <div class="max-w-xs dark h-full">
                            <div class="bg-green-100 relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                                <div class="absolute top-0 right-0 mr-6 -mt-4">
                                    <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Your Plan</div>
                                </div>
                                <div class="mb-5">
                                    <div class="text-slate-900 font-semibold mb-1">Perform</div>
                                    <div class="inline-flex items-baseline mb-2">
                                        <span class="text-slate-900 font-bold text-3xl">$</span>
                                        <span class="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '49' : '55'"></span>
                                        <span class="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div class="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                    <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150" href="#0">
                                        Change Plan
                                    </a>
                                </div>
                                <div class="text-slate-900 font-medium mb-3">Includes:</div>
                                <ul class="text-slate-600 text-sm space-y-3 grow">
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                        <!-- Pricing tab 3 -->
                        <div class="max-w-xs h-full">                                
                            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                                <div class="mb-5">
                                    <div class="text-slate-900 font-semibold mb-1">Essential</div>
                                    <div class="inline-flex items-baseline mb-2">
                                        <span class="text-slate-900 font-bold text-3xl">$</span>
                                        <span class="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                                        <span class="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div class="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                    <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150" href="#0">
                                        Change Plan
                                    </a>
                                </div>
                                <div class="text-slate-900 font-medium mb-3">Includes:</div>
                                <ul class="text-slate-600 text-sm space-y-3 grow">
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
                
                </div>
                
                <div class="mt-10">
                    <h3 class="text-xl font-semibold mb-6">Payment Details</h3>
                    <div class="flex flex-wrap gap-10">
                        <div class="w-fit h-fit p-5 bg-gray-100 rounded-xl">
                            <div class="flex justify-between mb-6 gap-16">
                                <h4 class="font-semibold text-lg">Latest Payment</h4>
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Details</button>
                            </div>
                
                            <div class="w-full flex justify-between mb-4">
                                <p class="text-gray-400">Payment Date</p>
                                <p class="font-medium text-gray-800">9/18/2023</p>
                            </div>
                
                            <div class="w-full flex justify-between mb-4">
                                <p class="text-gray-400">Payment Method</p>
                                <p class="font-medium text-gray-800">Visa <sup>************</sup>8623</p>
                            </div>
                
                            <div class="w-full flex justify-between">
                                <p class="text-gray-400">Total Payment</p>
                                <p class="font-medium text-gray-800">$32.50</p>
                            </div>
                        </div>

                        <div class="w-fit h-fit p-5 bg-gray-100 rounded-xl">
                            <div class="flex justify-between mb-6 gap-16">
                                <h4 class="font-semibold text-lg">Next Payment</h4>
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage Next Payment</button>
                            </div>
                
                            <div class="w-full flex justify-between mb-4">
                                <p class="text-gray-400">Payment Date</p>
                                <p class="font-medium text-gray-800">10/18/2023</p>
                            </div>
                
                            <div class="w-full flex justify-between mb-4">
                                <p class="text-gray-400">Payment Method</p>
                                <p class="font-medium text-gray-800">Visa <sup>************</sup>8623</p>
                            </div>
                
                            <div class="w-full flex justify-between">
                                <p class="text-gray-400">Total Payment</p>
                                <p class="font-medium text-gray-800">$32.50</p>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
    </div>
{:else if activeWindow === "Payment Methods"}
    <div class="flex w-full justify-between mt-2">
        <div class="ml-14">
            <h1 class="text-xl font-semibold">Payment Methods</h1>
            <p class="text-gray-500 text-sm mr-10">Check here to view, update, remove you payment methods</p>
        </div>

        <div class="flex">
            <button type="button" class="text-gray-800 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel</button>
            <button on:click={save} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
    </div>

    <div class="ml-16 mt-12 w-full">
        <div class="mt-8 md:mt-10 flex w-5/6 flex-wrap gap-6 pb-10">
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                    <a href="">Remove</a>
                    <a href="">Update</a>
                </div>
            </a>

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                    <a href="">Remove</a>
                    <a href="">Update</a>
                </div>
            </a>

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                    <a href="">Remove</a>
                    <a href="">Update</a>
                </div>
            </a>
        </div>
    </div>
{/if}