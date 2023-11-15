<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';

    let settings = "Billing";

    let switchToBilling = () =>{
        settings = "Billing"
    }

    let switchToGeneral = () =>{
        settings = "General"
    }
</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen">
    <div class="mt-6 flex flex-col justify-center items-center w-full">
        <h2 class="text-center md:text-left md:mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Settings</h2>
        <p class="text-gray-600 mx-6 md:mx-0">The Settings placeholder text</p>
        
        <ul class="flex gap-2 border-b-2 border-gray-600 mt-8 mb-10 w-5/6">
            <li on:click={switchToGeneral} class="{settings === "General" ? "bg-gray-300 font-medium" : ""} px-4 py-1.5 rounded-t-md hover:bg-gray-100 hover:cursor-pointer">General</li>
            <li on:click={switchToBilling} class="{settings === "Billing" ? "bg-gray-300 font-medium" : ""} px-4 py-1.5 rounded-t-md hover:bg-gray-100 hover:cursor-pointer">Billing</li>
        </ul>

        {#if settings === "General"}
            <form class="w-5/6 pb-10">
                <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">General Settings</h2>
            
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div class="mt-2">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                        <div class="mt-2">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        </div>
                    </div>
            
                    <div class="col-span-full">
                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div class="mt-2">
                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div class="mt-2">
                        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div class="mt-2">
                        <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
            
                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div class="mt-2">
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        {:else if settings === "Billing"}
            <h2 class="w-5/6 text-left md:mx-8 lg:mx-0 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Court Bookings</h2>
            <p class="w-5/6 text-left text-gray-600 mx-6 md:mx-0">Check here to see your most recent court bookings</p>

            <div class="mt-8 md:mt-10 flex w-5/6 flex-wrap gap-6 pb-10">
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                    <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                    <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                        <a href="">Remove</a>
                        <a href="">Update</a>
                    </div>
                </a>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                    <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                    <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                        <a href="">Remove</a>
                        <a href="">Update</a>
                    </div>
                </a>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Amex ending in 4316</h5>
                    <img class="w-10 h-auto" src="https://www.svgrepo.com//show/328148/amex.svg" alt="">
                    <p class="font-normal text-gray-600">Added on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <div class="flex text-blue-500 gap-2 underline justify-end mt-2">
                        <a href="">Remove</a>
                        <a href="">Update</a>
                    </div>
                </a>
            </div>

            <h2 class="w-5/6 text-base font-semibold leading-7 text-gray-900">Invoices</h2>
            <div class="w-5/6 mt-8 md:mt-3 flex flex-wrap gap-6 pb-10">
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                    <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                    <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
                </a>
                
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Standard Monthly Subscription</h5>
                    <p class="font-normal text-gray-600 mb-3">Total: $30.00</p>
                    <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                    <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
                </a>
            </div>
        {/if}
    </div>
</div>