<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen flex justify-center">
    <div class="md:mt-6 flex flex-col justify-center md:justify-start lg:justify-end items-center w-5/6">
        <h1 class="md:mt-16 lg:mt-2 mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Full Website Walkthrough</h1>
        <p class="text-center racking-tight leading-none text-gray-600 text-sm md:text-lg">This tutorial visually demonstrates the simple process from start to finish.</p>

        <div class="w-full flex flex-col items-end">
            <video class="w-full bg-black rounded-xl mt-12 md:mt-10" controls>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <a href="/help" class="mt-12 lg:mt-6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Back</a>
        </div>
    </div>
</div>