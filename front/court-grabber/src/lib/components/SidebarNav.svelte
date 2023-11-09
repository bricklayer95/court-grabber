<script>
  import logo from '$lib/assets/logo.png';
  import { authHandlers } from '../../store/store';

  let modalOpen = false;
  
  const logoutBtn = () => {
    modalOpen = true;
  }

  const closeModal = () =>{
    modalOpen = false;
  }

  const logout = () => {
    authHandlers.logout();
    window.location.href = "/";
  }
</script>

{#if modalOpen}
  <div class="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Heading out?</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Make sure you log out to keep your account secure. Logging out requires re-entering your password upon return - are you sure you want to log out now?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button on:click={logout} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Log out</button>
            <button on:click={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
            <img src={logo} class="h-8 mr-3" alt="Court Grabber Logo" />
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/reserve" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0ZM5.714 4.429h-.571v-.572h.571v.572ZM14.143 0H9.857A1.857 1.857 0 0 0 8 1.857v4.286C8 7.169 8.831 8 9.857 8h4.286A1.857 1.857 0 0 0 16 6.143V1.857A1.857 1.857 0 0 0 14.143 0ZM13.714 4.429h-.572v-.572h.572v.572ZM6.143 9H1.857A1.857 1.857 0 0 0 0 10.857v4.286C0 15.169.831 16 1.857 16h4.286a1.857 1.857 0 0 0 1.857-1.857v-4.286A1.857 1.857 0 0 0 6.143 9ZM5.714 13.429h-.571v-.572h.571v.572ZM14.143 9H9.857A1.857 1.857 0 0 0 8 10.857v4.286a1.857 1.857 0 0 0 1.857 1.857h4.286A1.857 1.857 0 0 0 16 15.143v-4.286A1.857 1.857 0 0 0 14.143 9ZM13.714 13.429h-.572v-.572h.572v.572Z"/>
            </svg>
            <span class="ml-3">Book Court</span>
          </a>
        </li>
        <li>
          <a href="/bookings" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M10.995 0a.995.995 0 0 0-.995.995V19.005a.995.995 0 0 0 .995.995h.01a.995.995 0 0 0 .995-.995V.995a.995.995 0 0 0-.995-.995h-.01Z"/>
            </svg>
            <span class="ml-3">Your Bookings</span>
          </a>
        </li>
        <li>
          <a href="/help" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M10.959 3.503a1 1 0 0 0-1.918 0l-3 10a1 1 0 0 0 .919 1.354h6.162a1 1 0 0 0 .92-1.355l-3-10Z"/>
              <path d="M15 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>
            <span class="ml-3">Help <!--Rename?--></span>
          </a>
        </li>
        <li>
          <a href="/settings" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M10.995 0a.995.995 0 0 0-.995.995V19.005a.995.995 0 0 0 .995.995h.01a.995.995 0 0 0 .995-.995V.995a.995.995 0 0 0-.995-.995h-.01Z"/>
            </svg>
            <span class="ml-3">Settings</span>
          </a>
        </li>
        <li on:click={logoutBtn}>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M10.995 0a.995.995 0 0 0-.995.995V19.005a.995.995 0 0 0 .995.995h.01a.995.995 0 0 0 .995-.995V.995a.995.995 0 0 0-.995-.995h-.01Z"/>
            </svg>
            <span class="ml-3">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  

  <!-- Sidebar with
    <ul>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <span class="ml-4">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <img src="https://img.icons8.com/ios-filled/150/757575/tennis-2.png" class="w-6" alt="">
            <span class="ml-4">Book Court</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <img src="https://img.icons8.com/ios-filled/150/9e9e9e/planner.png" class="ml-0.5 w-5" alt="">
            <span class="ml-4">Schedule Court</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover-bg-gray-100 group">
            <img src="https://img.icons8.com/external-outline-juicy-fish/150/9e9e9e/external-tennis-gym-life-outline-outline-juicy-fish.png" class="w-6" alt="">
            <span class="ml-4">Your Bookings</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <img src="https://img.icons8.com/ios-filled/50/9e9e9e/edit--v1.png" class="ml-0.5 w-5" alt="">
            <span class="ml-4">Manage Your Courts</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <img src="https://img.icons8.com/ios-filled/50/9e9e9e/settings.png" class="ml-0.5 w-5" alt="">
            <span class="ml-4">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <img src="https://img.icons8.com/ios-filled/50/9e9e9e/open-pane.png" class="ml-0.5 w-5" alt="">
            <span class="ml-4">Log Out</span>
          </a>
        </li>
      </ul>
  -->
  
  <!--main content-->
