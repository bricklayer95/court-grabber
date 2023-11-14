<script>
    import tennisBall from '$lib/assets/tennisBall.png';
    import { crossfade, draw, fade, fly, slide } from 'svelte/transition';
    import { authHandlers } from '../../store/store';

    let fullName;
    let fullNameErr;
    let emailErr;
    let email;
    let password;
    let passwordErr;
    let checkPassword;
    let checkPasswordErr;
    let step = 1;

    let next = async () => {
      if(step === 1 && !fullName){
        fullNameErr = "Please enter a full name";
        return;
      }

      if(step === 2 && !email){
        emailErr = "Please enter an email";
        return;
      }

      if (step ===2 && !validEmail(email)){
        emailErr = "Please enter a valid email";
        return;
      }

      if(step === 3 && !password){
        passwordErr = "Please enter a password";
        return;
      } else{
        passwordErr = undefined;
      }

      if(step === 3 && password.trim().length < 6){
        passwordErr = "Please enter a password longer than 6 characters";
        return;
      } else{
        passwordErr = undefined;
      }

      if(step === 3 && !checkPassword){
        checkPasswordErr = "Please enter a check password";
        return;
      }else{
        checkPasswordErr = undefined;
      }

      if(step === 3 && password !== checkPassword){
        checkPasswordErr = "Please make sure passwords match";
        return;
      }else{
        checkPasswordErr = undefined;
      }

      if(step === 3){
        await authHandlers.signup(email, password);
        //log vercel signup event
        window.location.href = "/dashboard";
      }

      step++;
    }

    function validEmail(em) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
      return emailRegex.test(em);
    }

    let back = () => {
      step--;
    }

    const register = async () =>{
      console.log(email, password)
      try{
        await authHandlers.signup(email, password);
        //log vercel signup event
        window.location.href = "/dashboard";
      }catch(err){
        alert("There was an unexpected error", err)
      }
    }
</script>


<div class="w-screen h-screen flex md:bg-gray-200 md:pt-2 md:pb-2.5 md:pr-3">
  <div class="hidden md:flex flex-1 h-full justify-center items-center">
      <img class="w-3/5" src="https://clipart.coolclips.com/480/vectors/tf05110/CoolClips_peop3505.png" alt="">
  </div>

  <div class="box-width h-full rounded-xl bg-white m-0 p-0">
      <div class="flex min-h-full flex-col px-6 justify-center md:justify-start gap-0 md:gap-4 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mt-6 md:mt-60 mx-auto h-12 w-auto" src={tennisBall} alt="Court Grabber Offical Logo">
            <h2 class="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Start your 14 day free trial</h2>
            <p class="text-gray-400 mt-1 text-center mb-4">Get started in a few quick steps</p> <!--Placeholder helper text-->
          </div>
        
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
              {#if step === 1}
                {#if !fullNameErr}
                  <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div class="mt-2 mb-10">
                      <input bind:value={fullName} placeholder="Don Q" id="name" name="name" type="text" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                {:else}
                  <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div class="mt-2 mb-10">
                      <input transition:fade bind:value={fullName} placeholder="Don Q" id="name" name="name" type="text" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <p class="text-red-400 ml-1 mt-1 text-xs font-medium">{fullNameErr}</p>
                    </div>
                  </div>
                {/if}
                
                <div class="mt-12">
                  <button on:click={next} type="button" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
                </div>

                {:else if step === 2}
                  <div class="w-full h-3 mx-auto -mt-1.5 mb-12 bg-gray-200 rounded-full">
                    <div class="h-3 bg-green-600 rounded-full" style="width: 50%"></div>
                  </div>
                {#if !emailErr}
                    <div>
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                      <div class="mt-2 mb-10">
                        <input bind:value={email} placeholder="donquavious.lajackson@gmail.com" id="email" name="email" type="email" autocomplete="email" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </div>
                    </div>
                {:else}
                    <div>
                      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                      <div class="mt-2 mb-10">
                        <input transition:fade bind:value={email} placeholder="donquavious.lajackson@gmail.com" id="email" name="email" type="email" autocomplete="email" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                        <p class="text-red-400 ml-1 mt-1 text-xs font-medium">{emailErr}</p>
                      </div>
                    </div>
                {/if}

                <div class="mt-12">
                  <button on:click={next} type="button" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
                </div>
              {:else if step === 3}
                <div class="w-full h-3 mx-auto -mt-1.5 mb-12 bg-gray-200 rounded-full">
                  <div class="h-3 bg-green-600 rounded-full" style="width: 95%"></div>
                </div>
                {#if !passwordErr}
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                      <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                {:else}
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                      <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <p class="text-red-400 ml-1 mt-1 text-xs font-medium">{passwordErr}</p>
                    </div>
                  </div>
                {/if}

                {#if !checkPasswordErr}
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Check Password</label>
                    </div>
                    <div class="mt-2">
                      <input bind:value={checkPassword} id="password" name="password" type="password" autocomplete="current-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                {:else}
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Check Password</label>
                    </div>
                    <div class="mt-2">
                      <input bind:value={checkPassword} id="password" name="password" type="password" autocomplete="current-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                      <p class="text-red-400 ml-1 mt-1 text-xs font-medium">{checkPasswordErr}</p>
                    </div>
                  </div>
                {/if}

                <div class="mt-12">
                  <button on:click={next} type="button" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create your account</button>
                </div>
              {/if}
        
              
            </form>
        
            <p class="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <a href="/login" class="font-semibold leading-6 text-green-600 hover:text-green-700">Login</a>
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