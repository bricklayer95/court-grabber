<script>
    import tennisBall from "$lib/assets/tennisBall.png";

    const plans = [
        {
            name: "Recreational", 
            price: 15, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        },
        {
            name: "Competitive", 
            price: 18, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        },
        {
            name: "Group", 
            price: 50, 
            description: "There are many variations available, but the majority have suffered.",
            features: ["Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts", "Unlimited placeholder texts"],
            link: ""
        }
        ]
</script>

<div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <header class="absolute w-full z-30">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-16 md:h-20">

                <!-- Site branding -->
                <div class="shrink-0 mr-4">
                    <!-- Logo -->
                    <a class="block" href="index.html" aria-label="Cruip">
                        <img class="w-12" src={tennisBall} alt="">
                    </a>
                </div>

                <!-- Desktop navigation -->
                <nav class="flex grow">

                    <!-- Desktop sign in links -->
                    <ul class="flex grow justify-end flex-wrap items-center">
                        <li class="ml-3">
                            <a href="/register" class="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm">
                                Book a court
                                <span class="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                    <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>

                </nav>

            </div>
        </div>
    </header>

    <!-- Page content -->
    <main class="grow">

        <!-- Hero -->
        <section class="relative">

            <!-- Bg -->
            <div class="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-gradient-to-tr from-green-600 to-green-500 pointer-events-none -z-10" aria-hidden="true"></div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pt-36 md:pt-40 md:pb-20">

                    <!-- Hero content -->
                    <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
                    
                        <!-- Content -->
                        <div class="md:w-[600px]">

                            <!-- Copy -->
                            <h1 class="h1 text-white mb-6" data-aos="fade-up" data-aos-delay="100">Your Personal Tennis Booking
                                <span class="ml-2.5 relative inline-flex items-center justify-center">
                                    <svg class="absolute -z-10" width="246" height="76" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z" fill="#9ccc65" fill-rule="nonzero" />
                                    </svg>
                                    Assistant
                                </span></h1>
                            <p class="text-lg text-green-50 mb-8" data-aos="fade-up" data-aos-delay="200">Our software automatically books courts, so you never have to <br> worry about securing a court ahead of others.</p>

                            <!-- Buttons -->
                            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0" data-aos="fade-up" data-aos-delay="300">
                                <div>
                                    <a href="/register" class="btn-sm w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm">
                                        Book a court
                                        <span class="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                            <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    
                        <!-- Image -->
                        <div class="max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
                            <div class="relative -ml-3 -mr-10 md:mx-0">
                                <!--<img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten" src="./images/hero-illustration.svg" width="960" height="960" aria-hidden="true" />-->
                                <video class="md:max-w-none bg-black" width="610" height="500" controls>
                                    <source src="/docs/videos/flowbite.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        </section>

        <!-- Section #1 -->
        <section>
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="py-12 md:py-28 md:pb-20">
        
                    <!-- Items -->
                    <div class="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none">
        
                        <!-- 1st item -->
                        <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up">
                            <div class="mb-3">
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                                            <stop stop-color="#4caf50" offset="0%" />
                                            <stop stop-color="#43a047" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g fill-rule="nonzero" fill="none">
                                        <path d="M43.443 49.745a1.028 1.028 0 0 1-.262-.019l-23.5-4.9a1 1 0 0 1-.775-1.186l6.2-29.352a1.006 1.006 0 0 1 1.182-.773l23.42 4.885a1 1 0 0 1 .776 1.183l-6.12 29.37a1 1 0 0 1-.921.795v-.003Z" fill="#a5d6a7" />
                                        <path d="M25 32H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1ZM8 15.25l3.5 4 6.5-6.5-1-.75-5.5 4.25-2.5-2-1 1Z" fill="url(#a)" style="mix-blend-mode:multiply" transform="translate(6 6)" />
                                    </g>
                                </svg>
                            </div>
                            <h4 class="text-xl font-bold mb-1">Book Courts in Minutes, Not Weeks</h4>
                            <p class="text-slate-500">Tired of having to plan your tennis matches days or weeks in advance? Find available times and reserve your spot instantly without lengthy planning.</p>
                        </div>
        
                        <!-- 2nd item -->
                        <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up" data-aos-delay="100">
                            <div class="mb-3">
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                                            <stop stop-color="#4caf50" offset="0%" />
                                            <stop stop-color="#43a047" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g fill-rule="nonzero" fill="none">
                                        <path d="m19.93 36.705-9.769-20.03c-.208-.426.026-.966.523-1.209L39.446 1.438c.497-.242 1.066-.094 1.274.332l9.77 20.03c.207.427-.026.967-.523 1.21L21.205 37.036c-.497.243-1.067.094-1.274-.332Zm2.395-22.466-7.19 3.507.876 1.798 7.19-3.507-.876-1.798Z" fill="#a5d6a7" />
                                        <path d="M32 46V12h5.143c.474 0 .857.447.857 1v32c0 .553-.383 1-.857 1H32Zm-2 0H14.857c-.474 0-.857-.447-.857-1V13c0-.553.383-1 .857-1H30v34ZM18 34v8h2v-8h-2Z" fill="url(#a)" style="mix-blend-mode:multiply" transform="rotate(64 19.372 32.782)" />
                                    </g>
                                </svg>
                            </div>
                            <h4 class="text-xl font-bold mb-1">Unlimited Session Length</h4>
                            <p class="text-slate-500">Don't stress about the clock - book courts for 1 hour or 5 with no session maximum. Focus on your game, not how much time is left.</p>
                        </div>
        
                        <!-- 3rd item -->
                        <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up" data-aos-delay="200">
                            <div class="mb-3">
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                                            <stop stop-color="#4caf50" offset="0%" />
                                            <stop stop-color="#43a047" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g fill-rule="nonzero" fill="none">
                                        <path d="M30.22 38.065h-26a1 1 0 0 1-1-1v-32a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v32a1 1 0 0 1-1 1Zm-19-24v2h7v-2h-7Zm3 6v2h10v-2h-10Zm-3 6v2h7v-2h-7Z" fill="#a5d6a7" />
                                        <path d="m51.585 50.536-25.984.907a1 1 0 0 1-1.034-.964l-1.117-31.98a1 1 0 0 1 .965-1.035l25.984-.907a1 1 0 0 1 1.034.964l1.117 31.98a1 1 0 0 1-.965 1.035ZM40.337 38.061l3.832-4.11a.843.843 0 0 0-.042-1.192l-4.11-3.833-1.15 1.235 3.492 3.256-3.257 3.493 1.235 1.15Zm-4.97.173L36.518 37l-3.492-3.257 3.256-3.492-1.234-1.151-3.832 4.11a.843.843 0 0 0 .041 1.192l4.11 3.832Z" fill="url(#a)" style="mix-blend-mode:multiply" />
                                    </g>
                                </svg>
                            </div>
                            <h4 class="text-xl font-bold mb-1">Unlimited Court Reservations</h4>
                            <p class="text-slate-500">Book the entire park if your would like! We don't limit how many courts you can reserve. Play to your heart's content.</p>
                        </div>
        
                    </div>
        
                </div>
            </div>
        </section>

        <!-- Section #2 -->
        <section data-aos-id-2>
            <div class="relative max-w-7xl mx-auto">

                <!-- Bg -->
                <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10" aria-hidden="true"></div>

                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="pt-12 md:py-20">
                
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col justify-center">
                        
                            <!-- Content -->
                            <div class="md:max-w-lg">
                        
                                <!-- Copy -->
                                <h2 class="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">Tired of having to book courts a week in advance?</h2>
                                <p class="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">Forget scheduling your calendar around court reservations. CourtBooker makes reserving courts fit your schedule, not the other way around.</p>
                        
                                <!-- Button -->
                                <div class="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                                    <div>
                                        <a href="/register" class="btn-sm inline-flex items-center text-blue-50 bg-green-500 hover:bg-green-600 group shadow-sm">
                                            Book a court
                                            <span class="tracking-normal text-green-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                                <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <!-- Quote -->
                                <div class="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                                    <img class="rounded-full w-8 h-8 object-cover self-start shrink-0 mr-3" src="https://as1.ftcdn.net/v2/jpg/01/27/83/12/1000_F_127831275_IAn915vhQJXU05YaO3oaxCKUphY3DcfM.jpg" width="32" height="32" alt="Quote author 01" />
                                    <div>
                                        <blockquote class="text-slate-400 m-0">
                                            “ No more planning every match 7 days out and crossing my fingers that my schedule stays clear. I now typically reserve my favorite courts on the drive there! ”
                                        </blockquote>
                                    </div>
                                </div>
                        
                            </div>
                        
                            <!-- Image -->
                            <div class="md:absolute md:left-[500px] md:mb-0">
                                <div class="relative -mx-16 md:mx-0 my-auto">
                                    <img class="rounded-lg absolute top-1/2 -translate-y-1/2 translate-x-8  mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten" src="https://static.independent.co.uk/2022/01/27/11/f167cd0796731a04647d08c55b07ae14Y29udGVudHNlYXJjaGFwaSwxNjQzMzY3NzQw-2.64937597.jpg" width="620" height="600" aria-hidden="true" />
                                    <!--<div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                                        <img src="https://static.independent.co.uk/2022/01/27/11/f167cd0796731a04647d08c55b07ae14Y29udGVudHNlYXJjaGFwaSwxNjQzMzY3NzQw-2.64937597.jpg" class="md:max-w-none" width="775" height="450" alt="Feaatures 01" />
                                    </div>-->
                                </div>
                            </div>
                        
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- Section #3 -->
        <section class="mt-12 md:mt-20" data-aos-id-3>
            <div class="relative max-w-7xl mx-auto">
        
                <!-- Bg -->
                <div class="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10" aria-hidden="true"></div>
        
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="pb-6 pt-12 md:pt-20">
        
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
        
                            <!-- Content -->
                            <div class="w-[512px] max-w-full shrink-0 md:order-1">
        
                                <!-- Copy -->
                                <h2 class="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="100">Stay Flexible and Spontaneous</h2>
                                <p class="text-lg text-slate-500 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="200">Weather cancellations? Last-minute matches? CourtBooker adapts to your on-demand tennis needs. Easily cancel and rebook to accommodate unexpected changes at no extra cost. Pick up games are now hassle-free.</p>
        
                                <!-- Button -->
                                <div class="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                                    <div>
                                        <a href="/register" class="btn-sm inline-flex items-center text-blue-50 bg-green-500 hover:bg-green-600 group shadow-sm">
                                            Book a court
                                            <span class="tracking-normal text-green-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                                <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
        
                                <!-- Quote -->
                                <div class="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                                    <img class="rounded-full w-8 h-8 object-cover self-start shrink-0 mr-3" src="https://www.homecareassistancearlingtontx.com/wp-content/uploads/2020/06/Happy-Senior.jpg" width="32" height="32" alt="Quote author 02" />
                                    <div>
                                        <blockquote class="text-slate-500 m-0">
                                            “ CourtBooker is a game changer for my casual tennis group. We used to have to book courts days or weeks in advance and had no flexibility if plans changed last minute. Now with CourtBooker, we can snag an open court at the drop of a hat. I've cancelled and rebooked many times without fees when the weather didn't cooperate. ”
                                        </blockquote>
                                    </div>
                                </div>
        
                            </div>
        
                            <!-- Image -->
                            <div class="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                                <div class="relative -mx-8 md:mx-0">
                                    <img src="https://pbs.twimg.com/media/CSVievyUwAEvfKf.png" class="rounded-xl md:max-w-none" width="520" height="800" alt="Features 03" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" />
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </div>
        
            </div>
        </section>

        <!-- Section #4 -->
        <section class="mt-6" data-aos-id-4>
            <div class="relative max-w-7xl mx-auto">
        
                <!-- Bg -->
                <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10" aria-hidden="true"></div>
                <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10" aria-hidden="true"></div>
        
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="py-12 md:py-20">
        
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center">
        
                            <!-- Content -->
                            <div class="w-[512px] max-w-full shrink-0">
        
                                <!-- Copy -->
                                <h2 class="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="100">Book Smarter, Play More</h2>
                                <p class="text-lg text-slate-500 mb-12" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="200">Why CourtBooker Beats Parks and Rec</p>

                                <!-- Lists -->
                                <div class="sm:columns-2 mb-12 space-y-8 sm:space-y-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                                    <!-- Column #1 -->
                                    <div>
                                        <h5 class="font-bold mb-5">Court Booker</h5>
                                        <ul class="inline-flex flex-col text-slate-500 space-y-5">
                                            <li class="flex items-center">
                                                <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                    <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                                    <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                                </svg>
                                                <span>Reserve as soon as 5 Mins in Ahead</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                    <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                                    <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                                </svg>
                                                <span>Cancel as soon as 10 mins in advance for full refund</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                    <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                                    <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                                </svg>
                                                <span>Book unlimited timeslots</span>
                                            </li>
                                            <li class="flex items-center">
                                                <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                    <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                                    <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                                </svg>
                                                <span>Book unlimited courts</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Column #2 -->
                                    <div>
                                        <h5 class="font-bold mb-5">Parks and Rec</h5>
                                        <ul class="inline-flex flex-col text-slate-500 space-y-5">
                                            <li class="flex items-center">
                                                <img src="https://img.icons8.com/ios-filled/100/F44336/multiply.png" class="bg-red-100 x-w-h rounded-full p-0.5 mr-3" alt="">
                                                <span>Must reserve 5-7 days ahead</span>
                                            </li>
                                            <li class="flex items-center">
                                                <img src="https://img.icons8.com/ios-filled/100/F44336/multiply.png" class="bg-red-100 x-w-h rounded-full p-0.5 mr-3" alt="">
                                                <span>Must cancel 10 Days in advance for refund</span>
                                            </li>
                                            <li class="flex items-center">
                                                <img src="https://img.icons8.com/ios-filled/100/F44336/multiply.png" class="bg-red-100 x-w-h rounded-full p-0.5 mr-3" alt="">
                                                <span>Limited to 2 timeslots per day</span>
                                            </li>
                                            <li class="flex items-center">
                                                <img src="https://img.icons8.com/ios-filled/100/F44336/multiply.png" class="bg-red-100 x-w-h rounded-full p-0.5 mr-3" alt="">
                                                <span>Limited to 1 court per day</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <!-- Button -->
                                <div class="max-w-xs mx-auto sm:max-w-none mb-20" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                                    <div>
                                        <a href="/register" class="btn-sm inline-flex items-center text-blue-50 bg-green-500 hover:bg-green-600 group shadow-sm">
                                            Book a court
                                            <span class="tracking-normal text-green-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                                <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
        
                            </div>
        
                            <!-- Image -->
                            <div class="w-full max-w-sm md:max-w-none md:ml-8 mt-8 md:mt-0">
                                <div class="relative -mx-8 md:mx-0">
                                    <img src="https://static.wixstatic.com/media/819f012d29d545a18890ebd61a681cd7.jpg/v1/fill/w_640,h_400,al_tl,q_80,usm_0.66_1.00_0.01,enc_auto/819f012d29d545a18890ebd61a681cd7.jpg" class="rounded-lg md:max-w-none ml-auto" width="496" height="496" alt="Features 04" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" />
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </div>
        
            </div>
        </section>

        <!-- Section #5 -->
        <section>
            <div class="relative max-w-7xl mx-auto">
        
                <!-- Bg -->
                <div class="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-green-600 to-green-500 pointer-events-none -z-10" aria-hidden="true"></div>
        
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="py-12 md:py-20">
        
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
        
                            <!-- Section header -->
                            <div class="md:max-w-3xl mb-12" data-aos="fade-up">
                                <h2 class="h2 text-white mb-4">Book your first court in minutes</h2>
                                <p class="text-lg text-green-100">Get started with CourtBooker in a few quick steps so you can book your first court right away.</p>
                            </div>
        
                            <!-- Image -->
                            <div class="flex justify-center items-center mb-14" data-aos="fade-up" data-aos-delay="100">
                                <div class="relative">
                                    <!--Video of how easy + quick it is to book a court-->
                                    <video class="md:max-w-none bg-black rounded-2xl" width="800" height="600" controls>
                                        <source src="/docs/videos/flowbite.mp4" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <!-- Items -->
                            <div class="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"  data-aos="fade-up" data-aos-delay="200">
                            
                                <!-- 1st item -->
                                <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-green-300 last:after:hidden">
                                    <div class="mb-3">
                                        <div class="flex items-center justify-center font-bold text-green-600 bg-green-200 h-11 w-11 rounded-full">1</div>
                                    </div>
                                    <h4 class="text-white text-xl font-bold mb-1">Start your free trial</h4>
                                    <p class="text-green-100">Create your account in seconds, with just a name, email and password. Choose a plan and begin your risk-free 14 day free trial.</p>
                                </div>
                            
                                <!-- 2nd item -->
                                <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-green-300 last:after:hidden">
                                    <div class="mb-3">
                                        <div class="flex items-center justify-center font-bold text-green-600 bg-green-200 h-11 w-11 rounded-full">2</div>
                                    </div>
                                    <h4 class="text-white text-xl font-bold mb-1">Search + book your favorite court</h4>
                                    <p class="text-green-100">Use our intuitive website to browse courts by location, surface type, amenities and more. Book your favorite court in just a few clicks.</p>
                                </div>
                            
                                <!-- 3rd item -->
                                <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-green-300 last:after:hidden">
                                    <div class="mb-3">
                                        <div class="flex items-center justify-center font-bold text-green-600 bg-green-200 h-11 w-11 rounded-full">3</div>
                                    </div>
                                    <h4 class="text-white text-xl font-bold mb-1">Play</h4>
                                    <p class="text-green-100">You're all set! We'll send you confirmation and court details ahead of your booking. We handle the hassle so you can focus on your match. Just show up ready to play! Sign up now to get started!</p>
                                </div>
                            
                            </div>
        
                        </div>
        
                    </div>
                </div>
        
            </div>
        </section>

        <!-- Section #6 -->
        <section class="mt-12 md:mt-20" data-aos-id-6>
            <div class="relative max-w-7xl mx-auto">
        
                <!-- Bg -->
                <div class="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10" aria-hidden="true"></div>
        
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="py-12 md:py-20">
        
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
        
                            <!-- Content -->
                            <div class="w-[512px] max-w-full shrink-0 md:order-1">
        
                                <!-- Copy -->
                                <h2 class="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">Your Courts, Secured and Simplified</h2>
                                <p class="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">CourtBooker leverages industry-leading tools and practices to make your court bookings seamless and worry-free.</p>
                                <ul class="inline-flex flex-col text-slate-500 space-y-2.5" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="300">
                                    <li class="flex items-center">
                                        <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                            <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                        </svg>
                                        <span>Secure Encryption - Your payment info and account data are protected using bank-level encryption.</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                            <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                        </svg>
                                        <span>Court Availability in Real Time - Our smart platform syncs with court reservation systems to show real-time availability.</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                            <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                        </svg>
                                        <span>Easy and Reliable Cancellations - Cancel up to 24 hours before your booked time with just one click.</span>
                                    </li>
                                    <li class="flex items-center">
                                        <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle class="fill-green-100" cx="10" cy="10" r="10" />
                                            <path class="fill-green-500" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                                        </svg>
                                        <span>Park Relationship Management - We maintain partnerships with parks to offer reliable court access across your community.</span>
                                    </li>
                                </ul>
        
                            </div>
        
                            <!-- Carousel -->
                            <div class="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                                <div class="relative max-w-sm mx-auto">

                                    <div class="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10" aria-hidden="true"></div>

                                    <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
                                    <!-- * Initialized in src/js/main.js -->
                                    <!-- * Custom styles in src/css/additional-styles/theme.scss -->
                                    <div class="testimonial-carousel swiper-container max-w-sm mx-auto sm:max-w-none">
                                        <div class="swiper-wrapper">

                                            <!-- Card #1 -->
                                            <div class="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                                                <div class="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-700">
                                                    <img src="https://images.tennis.com/image/private/t_16-9_768/f_auto/tenniscom-prd/rd5xpvnbt5homuskvkin.jpg" class="md:max-w-none" width="384" height="180" alt="Testiomonial 01" />
                                                </div>
                                                <div class="grow flex flex-col relative bg-gradient-to-t from-slate-800 to-slate-700 p-6 pt-14">
                                                    <p class="grow font-medium text-slate-200 mb-4">“ As a professional tennis player, finding available courts with reliable bookings is crucial to my training and practice. I love that CourtBooker makes reserving my preferred court so easy - I can quickly check availability in the app and in minutes have my court booked, no hassle. It's been a total game changer for scheduling my court time around tournaments and travel. ”</p>
                                                    <div class="font-medium text-sm text-slate-500">
                                                        <span class="text-slate-200">Elisa Koeppel</span> - <span class="text-slate-400">WTA Tour Professional</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Card #2 -->
                                            <div class="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                                                <div class="relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-700">
                                                    <img src="https://dublin.ca.gov/ImageRepository/Document?documentID=26549" class="md:max-w-none" width="384" height="180" alt="Testiomonial 02" />
                                                </div>
                                                <div class="grow flex flex-col relative bg-gradient-to-t from-slate-800 to-slate-700 p-6 pt-14">
                                                    <p class="grow font-medium text-slate-200 mb-4">“ As a busy dad who plays tennis recreationally, I used to struggle to find open courts that fit my schedule. CourtBooker makes booking so fast and easy that I can reserve a court any time I have a free hour or two, even if it's at the last minute! It's been a game changer for letting me get court time whenever I want. I don't have to plan my weekends around court availability anymore thanks to CourtBooker. “</p>
                                                    <div class="font-medium text-sm text-slate-500">
                                                        <span class="text-slate-200">Mario Gress</span> - <span class="text-slate-400">Recreational Tennis Player</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Bullets -->
                                    <div class="mt-4">
                                        <div class="testimonial-carousel-pagination text-center"></div>
                                    </div>

                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </div>
        
            </div>
        </section>

        <!-- Section #7 -->
        <section>
            <div class="relative max-w-7xl mx-auto">
        
                <!-- Bg -->
                <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10" aria-hidden="true"></div>
                <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10" aria-hidden="true"></div>
        
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="py-12 md:py-20">
        
                        <!-- Section content -->
                        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
        
                            <!-- Section header -->
                            <div class="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                                <h2 class="h2 mb-4">Flexible plans to fit your tennis goals</h2>
                                <p class="text-lg text-slate-500 mb-10">Try Court Booker risk free. All plans include a 14 day free trial.</p>
                            </div>
        
                            <!-- Pricing tables -->
                            <div>
                            
                                <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                
                                    {#each plans as plan}
                                        <div class="h-full {plan.name === "Competitive" ? "scale-105" : ""}">                                
                                            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                                                {#if plan.name === "Competitive"}
                                                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                                                        <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                                                    </div>
                                                {/if}
                                                <div class="mb-5">
                                                    <div class="text-slate-900 font-semibold mb-1">{plan.name}</div>
                                                    <div class="inline-flex items-baseline mb-2">
                                                        <span class="text-slate-900 font-bold text-3xl">${plan.price}</span>
                                                        <span class="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                                                        <span class="text-slate-500 font-medium">/mo</span>
                                                    </div>
                                                    <div class="text-sm text-slate-500 mb-5">{plan.description}</div>
                                                    <a href="{plan.link}" class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                                        Start free trial
                                                    </a>
                                                </div>
                                                <div class="text-slate-900 font-medium mb-3">Includes:</div>
                                                <ul class="text-slate-600 text-sm space-y-3 grow">
                                                    {#each plan.features as feature}
                                                        <li class="flex items-center">
                                                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                            </svg>
                                                            <span>{feature}</span>
                                                        </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        </div>
                                    {/each}
                
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </div>
        
            </div>
        </section>

        <!-- FAQs -->
        <section>
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pb-12 md:pb-20"  data-aos="fade-up">
        
                    <!-- Section header -->
                    <div class="pb-12">
                        <h2 class="h2">FAQs</h2>
                    </div>
        
                    <!-- Columns -->
                    <div class="md:flex md:space-x-12 space-y-8 md:space-y-0">
        
                        <!-- Column -->
                        <div class="w-full md:w-1/2 space-y-8">
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">How does court booker work?</h4>
                                <p class="text-slate-500">CourtBooker leverages cutting-edge software to reserve tennis courts the moment they become available. We adapt to the demand, ensuring there's always a court waiting for you. Say goodbye to the frustration of needing to book courts a week ahead. CourtBooker is here to make playing tennis more convenient and affordable for busy tennis enthusiasts.</p>
                            </div>
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">Why did we create CourtBooker?</h4>
                                <p class="text-slate-500">We founded CourtBooker because we understand the challenges of fitting tennis into our busy lives. Traditional reservation systems can be a nightmare to navigate. CourtBooker empowers everyone to schedule games on their terms, making tennis accessible and enjoyable for all.</p>
                            </div>
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">What parks and courts are available for booking?</h4>
                                <p class="text-slate-500">Right now we support booking for the tennis courts at Latta Park, Freedom Park, Veterans Park, and Jeff Adams Tennis Center. We're rapidly expanding to support more parks soon. </p>
                            </div>
        
                        </div>
        
                        <!-- Column -->
                        <div class="w-full md:w-1/2 space-y-8">
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">Is there a limit to how many court bookings I can make per day or week?</h4>
                                <p class="text-slate-500">No, there's no limit! Book as many courts as you'd like. We're all about defying limitations.</p>
                            </div>
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">How do I access my upcoming court bookings in the app?</h4>
                                <p class="text-slate-500">In your dashboard, you'll see a list of your all your bookings including upcoming bookings with details on location, date, and time. You can also opt into receive email and text reminders for your bookings.</p>
                            </div>
        
                            <!-- Item -->
                            <div class="space-y-2">
                                <h4 class="text-xl font-bold">Do you offer any sweet perks for booking courts through the service?</h4>
                                <p class="text-slate-500">Yes! We run a program where when you book 5 courts using court booker, you can get a free booking on us. Check your dashboard to see how close you are to a free booking!</p>
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="relative">

            <!-- Bg -->
            <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
                <div class="py-12 md:py-20">

                    <div class="sm:flex sm:flex-col lg:flex-row justify-between items-center">

                        <!-- CTA content -->
                        <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                            <p class="text-xl text-green-500 font-[550] mb-3">What are you waiting for?</p>
                            <h2 class="h2 text-slate-100">Try any of our plans risk-free for 14 days.</h2>
                        </div>
                        
                        <!-- Buttons -->
                        <div class="shrink-0">
                            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0">
                                <div>
                                    <a href="/register" class="btn-sm w-full inline-flex items-center text-blue-50 bg-green-500 hover:bg-green-600 group shadow-sm">
                                        Book a court
                                        <span class="tracking-normal text-green-100 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                            <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div>
                                    <a class="btn-sm w-full inline-flex items-center text-white bg-slate-700 hover:bg-slate-800 shadow-sm relative before:absolute before:inset-0 before:bg-blue-400 before:bg-opacity-60 before:-z-10 before:rounded-full" href="#0">Get in touch</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
        
            </div>
        </section>

    </main>

    <!-- Site footer -->
    <footer class="relative">

        <!-- Bg -->
        <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>
        
        <!-- Illustration -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img class="max-w-none" src="./images/footer-illustration.svg" width="1940" height="381" />
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6">
    
            <!-- Blocks -->
            <div class="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8">
    
                <!-- 1st block -->
                <div class="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
                    <!-- Logo -->
                    <a class="block" href="index.html" aria-label="Cruip">
                        <img class="w-16" src={tennisBall} alt="">
                    </a>
                </div>
    
                <!-- 2nd block -->
                <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 class="text-sm text-slate-100 font-bold mb-3">Essentials</h6>
                    <ul class="text-sm font-[450] space-y-2">
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Payments</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Budgeting and analytics</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Open banking</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Pockets</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Subscriptions</a>
                        </li>
                    </ul> 
                </div>
    
                <!-- 3rd block -->
                <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 class="text-sm text-slate-100 font-bold mb-3">Company</h6>
                    <ul class="text-sm font-[450] space-y-2">
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">About us</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Diversity / Inclusion</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Sustainability</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Code of conduct</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Financial statements</a>
                        </li>
                    </ul>
                </div>
    
                <!-- 4th block -->
                <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 class="text-sm text-slate-100 font-bold mb-3">Lifestyle</h6>
                    <ul class="text-sm font-[450] space-y-2">
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">International products</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Currency exchange</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Lounge & Smart delay</a>
                        </li>
                    </ul>
                </div>
    
                <!-- 5th block -->
                <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 class="text-sm text-slate-100 font-bold mb-3">Company</h6>
                    <ul class="text-sm font-[450] space-y-2">
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Send us an email</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Facebook</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Twitter</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Instagram</a>
                        </li>
                        <li>
                            <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">TikTok</a>
                        </li>
                    </ul>
                </div>
    
            </div>
    
            <!-- Bottom area -->
            <div class="pb-4 md:pb-8">
                <div class="text-xs text-slate-500">
                    If you would like to find out more about which entity you receive services from please click <a class="font-medium underline hover:text-blue-500 transition duration-150 ease-in-out" href="#0">here</a> If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland. Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment, current account and demand deposit account services.
                </div>
            </div>
    
        </div>
    </footer>
</div>

<style>
    .x-w-h{
        width: 20px;
        height: 20px;
    }
</style>