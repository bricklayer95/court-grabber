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
    <div class="mt-6 flex flex-col justify-center w-full">
        <h2 class="text-center md:text-left md:mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Court Bookings</h2>
        <p class="text-gray-600 mx-6 md:mx-0">Check here to see your most recent court bookings</p>
        
        <div class="mt-8 md:mt-10 flex w-full flex-wrap gap-6 px-2 pb-10">
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
            </a>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
            </a>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
            </a>
            <a href="#" class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Latta Park Court #4 @ 4:00-5:00 PM</h5>
                <p class="font-normal text-gray-600 mb-3">Total: $5.00</p>
                <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">November 26, 2023</span></p>
                <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4351</span></p>
            </a>
        </div>
    </div>
</div>