<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen">
    <div class="mt-6 flex flex-col justify-center items-center w-full">
        <h1 class="mt-16 mb-2 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Full Website Walkthrough</h1>
        <p class="tracking-tight leading-none text-gray-600 text-lg">This tutorial visually demonstrates the simple process from start to finish.</p>

        <div class="w-5/6 flex flex-col items-end">
            <video class="w-full bg-black rounded-xl mt-20" controls>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <a href="/help" class="mt-12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Back</a>
        </div>
    </div>
</div>