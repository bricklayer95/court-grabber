<script>
  import { authHandlers } from '../../store/store';
  import logo from '$lib/assets/logo.png';
  import oldguy from '$lib/assets/oldguy.png';

  let email;
  let password;  

  const login = async ()=>{
    try{
      await authHandlers.login(email, password);
      //log vercel login event
      //window.location.href = "/dashboard";
    }catch(err){
      alert("There was an unexpected error logging in. Please try again.");
    }
  }
</script>


<div class="w-screen h-screen flex">
    <div class="w-1/2 h-full m-0 p-0 bg-slate-600">
        <img class="w-full" src={oldguy} alt="">
    </div>

    <div class="w-1/2 h-full m-0 p-0">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img class="mx-auto h-10 w-auto" src={logo} alt="Court Grabber Offical Logo">
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
          
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" bind:value={email}>
                  </div>
                </div>
          
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" bind:value={password}>
                  </div>
                </div>
          
                <div>
                  <button on:click={login} type="button" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
              </form>
          
              <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
              </p>
            </div>
          </div>
        </div>
</div>

