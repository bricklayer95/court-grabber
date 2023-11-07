<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
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

    

   /* getDoc(doc(db, "users", request.date)).then(res =>{
                    console.log(request.date)
                    loading = true;
                    data = res.data();
                    defaultCourt = Object.values(data)[0];
                    //SORT FOR ORDER OF TIME
                    availableSlots = Object.keys(defaultCourt.timeslots).filter((timeslot) => !defaultCourt.timeslots[timeslot].booked);
                    courts = Object.keys(data);
                    loading = false;
                }).catch(err =>{
                    console.log("An Error Occured");
                    loading = false;
                    //availableSlots = []; So it shows no Avaliable Courts Sorry about that
                })*/


    let bookings;

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
        <p class="text-gray-600 mx-6 md:mx-0">Check here to see your most recent court bookings</p>
        
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
            {/if}

            <a href="">Load More</a> <!--Implement Load More Functionality, possible check history page from final doc-->
        </div>
    </div>
</div>