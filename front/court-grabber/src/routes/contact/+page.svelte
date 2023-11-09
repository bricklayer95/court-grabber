<script>
    import SidebarNav from '$lib/components/SidebarNav.svelte';
    import { slide } from 'svelte/transition';
    import { authStore } from "../../store/store";
    import { db } from "$lib/firebase";
    import { doc, setDoc, collection, arrayUnion, addDoc } from "firebase/firestore";

    let email;
    let subject;
    let message;

    let successShowing = false;
    let loading = false;

    const send = async () => {
        loading = true;

        const helpRequest = await addDoc(collection(db, "help-requests"), {
            user: $authStore.user.uid,
            email: email,
            subject: subject,
            message: message,
        });

        await setDoc(doc(db, "users", $authStore.user.uid), {
            helpRequests: arrayUnion({requestId: helpRequest.id})
        }, {merge: true});

        email = "";
        subject = "";
        message = "";

        loading = false;
        successShowing = true;

        setTimeout(3000, () => {
            successShowing = false;
        });
    }
</script>

<SidebarNav/>

<div class="p-4 sm:ml-64 pt-20 bg-white h-screen">
    <section class="bg-white">
        {#if successShowing}
            <div transition:slide class="ml-auto mb-10 w-full p-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <span class="font-medium">Your help request has been successfully submitted!</span>
            </div>
        {/if}
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know. <br> Need immediate help? Contact us directly at (435) 565-9477</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input bind:value={email} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="johnny@appleseed.com" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input bind:value={subject} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea bind:value={message} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button on:click={send} type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {#if loading === true}
                        <div role="status">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    {:else}
                        Send message
                    {/if}
                </button>
            </form>
        </div>
      </section>
</div>