<script>
  import { authHandlers } from '../../store/store';
  import tennisBall from '$lib/assets/tennisBall.png';

  let email;
  let password;  

  const login = async ()=>{
    try{
      await authHandlers.login(email, password);
      //log vercel login event
      window.location.href = "/dashboard";
    }catch(err){
      alert("There was an unexpected error logging in. Please try again.");
    }
  }
</script>


<div class="w-screen h-screen flex md:bg-gray-200 md:pt-2 md:pb-2.5 md:pr-3">
    <div class="hidden md:flex md:flex-1 h-full justify-center items-center">
      <img class="w-3/5" src=https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/69076/tennis-clipart-md.png alt="">
    </div>

    <div class="box-width h-full rounded-xl bg-white m-0 p-0">
        <div class="flex min-h-full flex-col px-6 justify-center lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img class="mx-auto h-12 w-auto" src={tennisBall} alt="Court Grabber Offical Logo">
              <h2 class="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Welcome back!</h2>
              <p class="text-gray-400 mt-1 text-center mb-7 md:mb-9">Please enter your details</p> <!--Placeholder helper text-->
            </div>
          
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
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
                      <a href="#" class="font-semibold text-green-600 hover:text-green-700">Forgot password?</a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" bind:value={password}>
                  </div>
                </div>
          
                <div>
                  <button on:click={login} type="button" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
                </div>
              </form>
          
              <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a href="/register" class="font-semibold leading-6 text-green-600 hover:text-green-700">Join our community today</a>
              </p>
            </div>
          </div>
      </div>
</div>

<style>
  .box-width{
    width: 100%;
  }

  @media (min-width: 768px) { 
    .box-width{
      width: 50%;
    }
  }

  @media (min-width: 1024px) { 
    .box-width{
      width: 35%;
    }
  }
</style>
