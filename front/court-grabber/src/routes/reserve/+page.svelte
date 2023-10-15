<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';

    let step = 1;

    let next = () =>{
        step++;
    }

    let back = () =>{
        step--;
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
            <h1 class="mb-1 mx-8 md:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h1>
            <p class="text-gray-600 text-center">Enter a few details about the reservation</p>
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
                                <option value="Fever" selected>Any Court</option>
                                <option value="Flu">Court #1</option>
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
                    <label for="numOfFolks" class="block text-sm font-medium leading-6 text-gray-900">How many folks will be joining you?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input type="number" name="numOfFolks" id="additionalDetails" class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder=4 min=0>
                    </div>
                </div>
                <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Next</button>
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
                                <select class="block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                    <option value="Fever" selected>Any Court</option>
                                    <option value="Flu">Court #1</option>
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

                    <div class="grid space-y-2 w-5/6">
                        <p class="mt-3 mb-2 font-medium text-md leading-6 text-gray-900" >Available Times (Select as many as you would like)</p>
                        <label for="hs-vertical-radio-checked-in-form" class="flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                            <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                            <span class="text-md text-gray-500 ml-3">8:00AM-9:00AM</span>
                        </label>
                    
                        <label for="hs-vertical-radio-checked-in-form" class="flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                            <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                            <span class="text-md text-gray-500 ml-3">9:00AM-10:00AM</span>
                        </label>

                        <label for="hs-vertical-radio-checked-in-form" class="flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                            <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                            <span class="text-md text-gray-500 ml-3">10:00AM-11:00AM</span>
                        </label>

                        <label for="hs-vertical-radio-checked-in-form" class="flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                            <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                            <span class="text-md text-gray-500 ml-3">11:00AM-12 :00AM</span>
                        </label>
                    </div>
                    
                </div>

                <div class="w-full lg:w-1/2 pt-10">
                    <div class="flex flex-col justify-center items-center px-4 lg:px-14">
                        <p class="md:max-w-md lg:max-w-sm w-full text-left block font-medium text-sm leading-6 text-gray-900">Select the Date</p>
                        <div class="mt-2 md:max-w-md lg:max-w-sm w-full shadow-lg">
                            <div class="md:p-8 p-5 bg-white rounded-t">
                                <div class="px-4 flex items-center justify-between">
                                    <span tabindex="0" class="focus:outline-none text-base font-bold text-gray-100 text-gray-800">October 2020</span>
                                    <div class="flex items-center">
                                        <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                        </button>
                                        <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800">
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
                                            <tr>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">1</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">2</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">3</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">4</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">5</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">6</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">7</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="w-full h-full">
                                                        <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                            <a role="link" tabindex="0" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">9</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">10</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">11</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">12</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">13</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">14</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">15</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">16</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">17</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">18</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">19</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">20</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">21</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">22</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">23</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">24</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100">25</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">26</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">27</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">28</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">29</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 text-gray-100 font-medium">30</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="max-w-sm w-full flex mt-5 gap-1 pr-6 justify-end mb-6 lg:mb-0">
                            <button class="text-black transform p-4 rounded-xl self-end font-semibold" on:click={back}>Back</button>
                            <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={next}>Next</button>
                        </div>
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
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="relative">
                                <select class="text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                    <option value="Fever" selected>Amex</option>
                                    <option value="Flu">Add Card</option>
                                </select>
                            </div>
                        </div>
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