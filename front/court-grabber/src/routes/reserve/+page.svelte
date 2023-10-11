<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';

    let step = 1;
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
                    Basic <span class="hidden sm:inline-flex sm:ml-2">Info</span>
                </span>
            </li>
            <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span class="mr-2">2</span>
                    <span class="hidden sm:inline-flex sm:ml-2">Details</span>
                </span>
            </li>
            <li class="flex items-center">
                <span class="mr-2">3</span>
                Done
            </li>
        </ol>
        {#if step === 1}
            <h1 class="mx-8 md:mx-0 mt-6 mb-8 md:mt-0 md:mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h1>
            <div class="w-5/6 md:w-3/4 lg:w-1/2 flex flex-col justify-end">
                <div class="mb-3">
                    <label for="startDate" class="block text-sm font-medium leading-6 text-gray-900">What is the name of the event?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="eventName" id="eventName" class="block w-full rounded-md border-0 py-3 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder="Fun time with friends">
                    </div>
                </div>

                <div class="mb-3">
                    <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">What park?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="relative">
                            <select class="block w-full rounded-md border-0 py-3 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                <option value="Fever" selected>Random</option>
                                <option value="Flu">Flu</option>
                                <option value="Fever">Fever</option>
                                <option value="Food Poisoning">Food Poisoning</option>
                                <option value="Pink Eye">Pink Eye</option>
                                <option value="Strep Throat">Strep Throat</option>
                                <option value="Seasonal Allergies">Seasonal Allergies</option>
                                <option value="Migraine">Migraine</option>
                                <option value="Upset Stomach">Upset Stomach</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="mb-6 md:mb-3">
                    <label for="numOfFolks" class="block text-sm font-medium leading-6 text-gray-900">How many folks will be joining you?</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input type="number" name="numOfFolks" id="additionalDetails" class="block w-full rounded-md border-0 py-3 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" placeholder=4 min=0>
                    </div>
                </div>

                <label for="speed" class="hidden md:block mb-2 text-sm font-medium leading-6 text-gray-900">Speed Options</label>
                <div class="hidden md:grid sm:grid-cols-2 gap-2 mb-8"> 
                    <label for="gpt-4" class="flex p-3 block w-full bg-white ring-1 ring-inset ring-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                    <input type="radio" name="speed" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500" id="gpt-4">
                    <span class="text-sm text-gray-500 ml-3">Best Quality (Slower Load) <div class="text-blue-500">Recommended</div></span>
                    </label>
                
                    <label for="gpt-3.5-turbo" class="flex p-3 block w-full bg-white ring-1 ring-inset ring-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                    <input type="radio" name="speed" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500" id="gpt-3.5-turbo">
                    <span class="text-sm text-gray-500 ml-3">Lower Quality (Faster Load)</span>
                    </label>
                </div>

                <div class="flex items-center gap-2 mb-6">
                    <input type="checkbox" class="rounded-full" id="hs-default-checkbox">
                    <label for="hs-default-checkbox" class="text-sm  text-black">I have read and accept the <a href="/terms" class="text-gray-100 hover:cursor-pointer">Terms and Conditions</a>, <a href="/disclaimer" class="text-gray-100 hover:cursor-pointer">Disclaimer</a> and <a href="/aup" class="text-gray-100 hover:cursor-pointer">Acceptable Use Policy</a></label>
                </div>
                <button class="bg-black text-white transform p-4 rounded-xl self-end font-semibold" on:click={create}>Create</button>
            </div>
        {:else if step === 2}
        <div class="flex flex-wrap">
        <div class="flex justify-center items-center w-full">
            <img src="https://img.icons8.com/metro/150/back.png" class="w-8 h-8 absolute left-1/3" alt="">
            <h2 class="mx-8 md:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Book a Court</h2>
        </div>

            <div class="w-1/2">
                <div class="mb-3">
                    <label for="reason" class="block text-sm font-medium leading-6 text-gray-900">Court</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="relative">
                            <select class="block w-full rounded-md border-0 py-3 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" id="reason">
                                <option value="Fever" selected>Random</option>
                                <option value="Flu">Flu</option>
                                <option value="Fever">Fever</option>
                                <option value="Food Poisoning">Food Poisoning</option>
                                <option value="Pink Eye">Pink Eye</option>
                                <option value="Strep Throat">Strep Throat</option>
                                <option value="Seasonal Allergies">Seasonal Allergies</option>
                                <option value="Migraine">Migraine</option>
                                <option value="Upset Stomach">Upset Stomach</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="grid space-y-2">
                    <label for="hs-vertical-radio-checked-in-form" class="max-w-xs flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                        <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                        <span class="text-md text-gray-500 ml-3">8:00AM-9:00AM</span>
                    </label>
                  
                    <label for="hs-vertical-radio-checked-in-form" class="max-w-xs flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                        <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                        <span class="text-md text-gray-500 ml-3">9:00AM-10:00AM</span>
                    </label>

                    <label for="hs-vertical-radio-checked-in-form" class="max-w-xs flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                        <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                        <span class="text-md text-gray-500 ml-3">10:00AM-11:00AM</span>
                    </label>

                    <label for="hs-vertical-radio-checked-in-form" class="max-w-xs flex p-5 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-400">
                        <input type="radio" name="hs-vertical-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 bg-gray-800 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800" id="hs-vertical-radio-checked-in-form" checked>
                        <span class="text-md text-gray-500 ml-3">11:00AM-12 :00AM</span>
                    </label>
                </div>
                  
            </div>

            <div class="w-1/2">
                <div class="flex items-center justify-center py-8 px-4">
                    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
                
                    <div class="max-w-sm w-full shadow-lg">
                        <div class="md:p-8 p-5 bg-gray-800 bg-white rounded-t">
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
                            <div class="flex items-center justify-between pt-12 overflow-x-auto">
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
                </div>
                </div>
        </div>                
        {/if}
    </div>
</div>