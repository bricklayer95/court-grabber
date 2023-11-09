<script>
    //Layout.svelte gets the subscription status of user account, if plan expired, subscription unpaid ect passes that into this component and it days the proper text accordingly
    export let status;

    const plans = [
        {
            name: "Recreational", 
            price: 15, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        },
        {
            name: "Competitive", 
            price: 18, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        },
        {
            name: "Group", 
            price: 50, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        }
        ]
</script>

<main class="relative min-h-screen flex flex-col bg-slate-50 overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6">

            {#if status === "New User"}
                <h1 class="text-4xl font-semibold mt-24 ml-10">First, lets choose the right plan</h1>
                <p class="ml-10 mt-2 text-sm text-gray-600 leading-6 mb-14">Worried Court Booker is not for you? Fret not. All plans come with a 14 day free trial!</p>
            {:else if status === "Unpaid"}
                <h1 class="text-4xl font-semibold mt-24 ml-10">U no pay, might gotta send the boys after ya</h1>
                <p class="ml-10 mt-2 text-sm text-gray-600 leading-6 mb-14">Worried Court Booker is not for you? Fret not. All plans come with a 14 day free trial!</p>
            {:else if status === "Trial Ended"}
                <h1 class="text-4xl font-semibold mt-24 ml-10">Your trail has ended, lets pick a new plan ma boi</h1>
                <p class="ml-10 mt-2 text-sm text-gray-600 leading-6 mb-14">Worried Court Booker is not for you? Fret not. All plans come with a 14 day free trial!</p>
            {:else if status === "Canceled"}
                <h1 class="text-4xl font-semibold mt-24 ml-10">Looks like your subscription has been canceled, sorry to see you go</h1>
                <p class="ml-10 mt-2 text-sm text-gray-600 leading-6 mb-14">Worried Court Booker is not for you? Fret not. All plans come with a 14 day free trial!</p>
            {:else}
                <h1 class="text-4xl font-semibold mt-24 ml-10">IDK what even the state of your subscription is lol</h1>
                <p class="ml-10 mt-2 text-sm text-gray-600 leading-6 mb-14">Worried Court Booker is not for you? Fret not. All plans come with a 14 day free trial!</p>
            {/if}
            <div>       
                <!-- Pricing toggle -->
                <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                    <div class="relative flex w-full p-1 bg-white rounded-full">
                        <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                            <span class="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                        </span>
                        <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out">Yearly <span >-20%</span></button>
                        <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out">Monthly</button>
                    </div>
                </div>
            
                <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

                    {#each plans as plan}
                        <div class="h-full {plan.name === "Competitive" ? "scale-105" : ""}">                                
                            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                                {#if plan.name === "Competitive"}
                                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                                        <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                                    </div>
                                {/if}
                                <div class="mb-5">
                                    <div class="text-slate-900 font-semibold mb-1">{plan.name}</div>
                                    <div class="inline-flex items-baseline mb-2">
                                        <span class="text-slate-900 font-bold text-3xl">${plan.price}</span>
                                        <span class="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                                        <span class="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div class="text-sm text-slate-500 mb-5">{plan.description}</div>
                                    <a href="{plan.link}" class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                        Choose Plan
                                    </a>
                                </div>
                                <div class="text-slate-900 font-medium mb-3">Includes:</div>
                                <ul class="text-slate-600 text-sm space-y-3 grow">
                                    {#each plan.features as feature}
                                        <li class="flex items-center">
                                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/each}

                </div>
            </div>
        </div>
    </main>