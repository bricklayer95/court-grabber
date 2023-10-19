<script>
  import SidebarNav from "$lib/components/SidebarNav.svelte";
  import tennisBall from "$lib/assets/tennisBall.png";
  import tennisBallNoColor from "$lib/assets/tennisBallNoColor.png";
  import tate from "$lib/assets/tate.mp4"
</script>

<SidebarNav/>
  
  <div class="p-4 sm:ml-64 mt-20 flex flex-col items-center lg:items-start lg:flex-row h-screen">
    <div class="w-5/6 lg:w-2/3">
      <h1 class="text-5xl md:text-6xl font-semibold mt-2 mb-1">Dashboard</h1>
      <p class="text-gray-500 text-xl md:text-2xl mb-14 md:mb-10">Helper Text</p>
    
      <div class="flex gap-4 mb-12">
        <a href="#_" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-green-100 border border-green-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-yellow-500 via-green-500 to-yellow-500">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <span class="relative flex justify-center items-center">Book Court</span>
        </a>
        <a href="#_" class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">Schedule Courts <img src="https://img.icons8.com/ios-filled/150/9e9e9e/planner.png" class="ml-2.5 w-5" alt=""></a>
      </div>

      <!-- svelte-ignore a11y-media-has-caption -->
      <video class="mb-14 lg:mb-0 w-full lg:w-4/5 bg-gray-600" controls>
        <source src={tate} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="mt-20">
        <p class="block text-lg font-medium leading-6 text-gray-900 mb-2.5">Book 5 courts, get one on us</p>
        <div class="flex h-12">
          <img src={tennisBall} alt="Tennis Ball">
          <img src={tennisBall} alt="Tennis Ball">
          <img src={tennisBallNoColor} alt="Tennis Ball">
          <img src={tennisBallNoColor} alt="Tennis Ball">
          <img src={tennisBallNoColor} alt="Tennis Ball">
        </div>
        <p class="block font-medium leading-6 text-gray-900 mt-2">3 More To Go</p>
      </div>
    </div>

    <div class="w-5/6 lg:w-1/3 h-3/4 flex flex-col justify-between">
      <div class="mb-12 flex flex-col gap-5">
        <p class="block text-xl font-medium leading-6 text-gray-900">Courts You Might Be Interested In</p>
        <div id="alert-additional-content-5" class="p-4 border border-gray-300 rounded-lg bg-gray-50" role="alert">
          <div class="flex items-center">
            <h3 class="text-lg font-medium text-gray-600">Latta Park @ 8:00-9:00 PM</h3>
          </div>
          <div class="mt-2 mb-4 text-sm text-gray-600">
            8:00PM - 9:00PM
          </div>
          <div class="flex">
            <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
              <svg class="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
              View more
            </button>
          </div>
        </div>
        <div id="alert-additional-content-5" class="p-4 border border-gray-300 rounded-lg bg-gray-50" role="alert">
          <div class="flex items-center">
            <h3 class="text-lg font-medium text-gray-600">Latta Park @ 8:00-9:00 PM</h3>
          </div>
          <div class="mt-2 mb-4 text-sm text-gray-600">
            8:00PM - 9:00PM
          </div>
          <div class="flex">
            <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
              <svg class="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
              View more
            </button>
          </div>
        </div>
        <!--<a href="/reserve" class="text-sm text-blue-500 underline">View More</a>-->
      </div>

      <div class="flex flex-col gap-5">
        <p class="block text-xl font-medium leading-6 text-gray-900">Your Bookings</p>
        <div id="alert-additional-content-5" class="mb-20 md:mb-0 p-4 border border-gray-300 rounded-lg bg-gray-50" role="alert">
          <div class="flex items-center">
            <h3 class="text-lg font-medium text-gray-600">Latta Park @ 8:00-9:00 PM</h3>
          </div>
          <div class="mt-2 mb-4 text-sm text-gray-600">
            8:00PM - 9:00PM
          </div>
          <div class="flex">
            <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
              <svg class="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
              View more
            </button>
          </div>
        </div>
      </div>
    </div>

  <!-- Your Bookings Section
    <h2 class="text-3xl font-semibold mb-8">Your Bookings</h2>

    <div class="flex gap-10 mb-10">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Read more
                 <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    -->

    
    </div>

  