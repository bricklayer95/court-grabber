<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
    import sadTennisBall from "$lib/assets/sadTennisBall.png"
    import { db } from "$lib/firebase";
    import { onSnapshot, updateDoc, getDoc, getDocs, doc, setDoc, collection, arrayUnion, query } from "firebase/firestore";
    import { authStore } from '../../store/store';
    import { onMount } from 'svelte';

    let step = 1;

    let next = () =>{
        step++;
    }

    let back = () =>{
        step--;
    }

    let bookings = null;

    $: {
        if($authStore.user){
            try {
                getDoc(doc(db, "users", $authStore.user.uid)).then(res =>{
                    bookings = res.data().bookedCourts;
                })
            } catch (err) {
                console.log(err);
            }
        }
    }

    
</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen">
    <div class="mt-6 flex flex-col justify-center w-full">
        <h2 class="text-center md:text-left md:mx-8 lg:mx-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Court Bookings</h2>
        <p class="text-gray-600 mx-7 md:mx-0 md:ml-2 text-center md:text-left">Check here to see your most recent court bookings</p>
        
        <div class="mt-8 md:mt-10 flex w-full flex-wrap gap-6 px-2 pb-10">
            {#if bookings}
                {#each bookings as booking}
                    <a href="#" class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{booking.park} Park Court #{booking.court} @ {booking.timeSlots} <!--Soon no matter how long session always shows start hour and end hour. Maybe not or add the total amount of sessions. --></h5>
                        <p class="font-normal text-gray-600 mb-0.5">Event Name: {booking.name}</p>
                        <p class="font-normal text-gray-600 mb-3">Total: ${booking.timeSlots.length * 5}.00</p>
                        <p class="font-normal text-gray-600">Purchased on <span class="font-semibold text-gray-700">{booking.date}</span></p>
                        <p class="font-normal text-gray-600">Amex ending in <span class="font-semibold text-gray-700">4698<!--Soon to be booking.card--></span></p>
                    </a>
                {/each}

                {#if bookings.length > 4}
                    <a href="">Load More</a> <!--Implement Load More Functionality, possible check history page from final doc-->
                {/if}
            {:else if bookings == undefined}
                <div class="mt-6 w-full h-full flex flex-col justify-center items-center">
                    <img class="h-72" src={sadTennisBall} alt="">
                    <h1 class="mt-3 text-gray-800 font-semibold text-3xl ml-2">No bookings yet</h1>
                    <p class="text-sm text-gray-500 mt-1">When you book a court it will show up here</p>
                    <a href="/reserve" type="button" class="mt-6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Book a court</a>
                </div>
            {/if}
        </div>
    </div>
</div>