<script>
    import bgOverlay from '$lib/assets/BG.png';
    import ebay from '$lib/assets/ebay.png';
    import cnn from '$lib/assets/cnn.png';
    import google from '$lib/assets/google.png';
    import cisco from '$lib/assets/cisco.png';
    import airbnb from '$lib/assets/airbnb.png';
    import uber from '$lib/assets/uber.png';
    import faqIcon from '$lib/assets/faqIcon.png';
    import db from '$lib/firebase';
    import { addDoc, collection } from 'firebase/firestore';


    let toggleFaq = (nth) =>{
        let allDivs = document.querySelectorAll('.faq-container');
        var children = allDivs[nth-1].children;

        children[1].children[1].style.transform = children[1].children[1].style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

        children[1].classList.toggle('closed');
    }

    let joinWaitlist = async (e) =>{
        let emailInput = e.target.parentElement.children[0];
        let email = emailInput.value;
        await addDoc(collection(db, "signUp"), {
            email: email
        });
        emailInput.value = '';
        alert(`The email - ${email} has sucessfully been added to the waitlist.`);
    }

    
</script>

<div class="w-screen h-screen darkGreen flex flex-col items-center overflow-hidden">
    <img class="w-full h-full mix-blend-overlay absolute z-10" src={bgOverlay} />

    <div class="darkest py-3 nav mt-6 rounded-full border border-gray-600 flex items-center px-7 justify-between">
        <p class="light-green-text header text-2xl">court<span class="normal-text">Grabber</span></p>
        <a class="light-green-text join-link" href="">Join</a>
    </div>

    <div class="w-full px-9 md:px-20">
        <h1 class="light-green-text mt-16 md:mt-20">Bank Payments done in no time with encryption hard as a rock.<!--<span class="flex flex-col justify-center"><div class="cool-border"><div class="inner-cool-border"></div></div> hard as rock.</span>--></h1>
        <h2 class="text-gray-400 w-full mb-12 mt-3 ">Get paid directly to your bank account. No cards needed.</h2>
    

        <div class="relative z-20 w-full md:w-1/2 foldInput bg-transparent border border-gray-500 rounded-full">
            <input class="w-full h-full bg-transparent z-20 md:placeholder:text-xl pl-4" type="text" placeholder="Email address">
            <button on:click={joinWaitlist} class="z-50 right-0 absolute h-full w-fit px-4 md:px-8 rounded-full light-green-border light-green-text darkest underline join-btn md:text-xl">Join the waitlist</button>
        </div>
    </div>

    <div class="hidden md:flex flex-col w-full absolute bottom-0 companiesHeight">
        <p class="text-center text-gray-400 -mt-4 md:-mb-6">Given the enormous support from top global leaders</p>
        <div class="flex w-full h-full px-10 md:px-20 flex-wrap">
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-5/6 md:w-2/5 h-auto" src={ebay} alt="Ebay Logo">
            </div>
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-4/6 md:w-2/5 h-auto" src={cnn} alt="">
            </div>
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-5/6 md:w-2/5 h-auto" src={google} alt="">
            </div>
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-5/6 md:w-2/5 h-auto" src={cisco} alt="">
            </div>
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-5/6 md:w-2/5 h-auto" src={airbnb} alt="">
            </div>
            <div class="w-1/3 md:flex-1 flex items-center justify-center">
                <img class="p-2 w-5/6 md:w-2/5 h-auto" src={uber} alt="">
            </div>
        </div>
    </div>
</div>

<div class="w-screen h-screen light-green-bg flex flex-col items-center justify-center overflow-hidden">
    <img class="w-full h-full mix-blend-overlay absolute z-10" src={bgOverlay} alt="Big Zero">
    <div class="flex w-full second-top-height flex-col md:flex-row px-12 md:px-0">
        <div class="w-full md:w-1/2 h-full">
            <h3 class="normal-text zero text-center">0</h3>
        </div>
        <div class="w-full md:w-1/2 second-top-height flex flex-col justify-center gap-10 my-14">
            <h4 class="normal-text text-5xl md:text-7xl">transaction fees.</h4>
            <h4 class="normal-text text-5xl md:text-7xl">maintenance fees.</h4>
            <h4 class="normal-text text-5xl md:text-7xl">charge backs.</h4>
            <h4 class="normal-text text-5xl md:text-7xl">forex fees.</h4>
            <h4 class="normal-text text-5xl md:text-7xl">cards required.</h4>
        </div>
    </div>

    <div class="hidden md:block md:relative z-20 inputBelowZero md:w-1/2 foldInput bg-transparent border border-gray-500 rounded-full">
        <input class="w-full h-full bg-transparent z-20 md:placeholder:text-xl pl-4" type="text" placeholder="Email address">
        <button on:click={joinWaitlist} class="z-50 right-0 absolute h-full w-fit px-4 md:px-8 rounded-full light-green-border light-green-text darkest underline join-btn md:text-xl">Join the waitlist</button>
    </div>
</div>

<div class="w-screen h-5/6 darkGreen md:px-32 py-24 flex flex-col items-center gap-8 overflow-hidden">
    <h5 class="light-green-text faq text-4xl w-5/6 md:w-4/6">Frequently Asked Questions</h5>

    <div class="faq-container light-green-text w-5/6 md:w-4/6" on:click={()=>{toggleFaq(1)}}>
        <h6 class="faq-title text-2xl">What is ezePay?</h6>
        <div class="w-full flex items-center justify-between mb-4">
            <p class="faq-answer text-md mt-3 w-5/6">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec auctor tellus. Sed pellentesque vitae arcu sit amet cursus. In nisl sem, varius ut metus ac, pulvinar rhoncus velit. Nulla malesuada in felis vitae porta. Praesent vitae lacinia risus. Suspendisse eros turpis, finibus nec erat et, aliquet vehicula nunc. </p>
            <img class="h-14 faq-icon" src={faqIcon} alt="FAQ Icon">
        </div>
        <hr>
    </div>

    <div class="faq-container light-green-text w-5/6 md:w-4/6" on:click={()=>{toggleFaq(2)}}>
        <h6 class="faq-title text-2xl">What is ezePay?</h6>
        <div class="w-full flex items-center justify-between mb-4 closed">
            <p class="faq-answer text-md mt-3 w-5/6">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec auctor tellus. Sed pellentesque vitae arcu sit amet cursus. In nisl sem, varius ut metus ac, pulvinar rhoncus velit. Nulla malesuada in felis vitae porta. Praesent vitae lacinia risus. Suspendisse eros turpis, finibus nec erat et, aliquet vehicula nunc. </p>
            <img class="h-14 faq-icon" style="transform: rotate(180deg);" src={faqIcon} alt="FAQ Icon">
        </div>
        <hr>
    </div>

    <div class="faq-container light-green-text w-5/6 md:w-4/6" on:click={()=>{toggleFaq(3)}}>
        <h6 class="faq-title text-2xl">What is ezePay?</h6>
        <div class="w-full flex items-center justify-between mb-4 closed">
            <p class="faq-answer text-md mt-3 w-5/6">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec auctor tellus. Sed pellentesque vitae arcu sit amet cursus. In nisl sem, varius ut metus ac, pulvinar rhoncus velit. Nulla malesuada in felis vitae porta. Praesent vitae lacinia risus. Suspendisse eros turpis, finibus nec erat et, aliquet vehicula nunc. </p>
            <img class="h-14 faq-icon" style="transform: rotate(180deg);" src={faqIcon} alt="FAQ Icon">
        </div>
        <hr>
    </div>

    <div class="faq-container light-green-text w-5/6 md:w-4/6" on:click={()=>{toggleFaq(4)}}>
        <h6 class="faq-title text-2xl">What is ezePay?</h6>
        <div class="w-full flex items-center justify-between mb-4 closed" >
            <p class="faq-answer text-md mt-3 w-5/6">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec auctor tellus. Sed pellentesque vitae arcu sit amet cursus. In nisl sem, varius ut metus ac, pulvinar rhoncus velit. Nulla malesuada in felis vitae porta. Praesent vitae lacinia risus. Suspendisse eros turpis, finibus nec erat et, aliquet vehicula nunc. </p>
            <img class="h-14 faq-icon" style="transform: rotate(180deg);" src={faqIcon} alt="FAQ Icon">
        </div>
        <hr>
    </div>

    <div class="relative z-20 inputBelowZero md:w-1/2 foldInput bg-transparent border border-gray-500 rounded-full">
        <input class="w-full h-full bg-transparent z-20 md:placeholder:text-xl pl-4" type="text" placeholder="Email address">
        <button on:click={joinWaitlist} class="z-50 right-0 absolute h-full w-fit px-4 md:px-8 rounded-full light-green-border light-green-text darkest underline join-btn md:text-xl">Join the waitlist</button>
    </div>
</div>




<style>
    footer{
        width: 100%;
    }


    .closed{
        justify-content: flex-end;
        margin-bottom: 0.5%;
        margin-top: -4%;
    }

    .closed p{
        display: none;
    }

    .faq-icon, div.w-full.flex.items-center.justify-between.mb-4{
        transition: transform 0.3s ease;
    }

    .faq-icon{
        cursor: pointer;
    }

    .activeIcon{
        transform: rotate(180deg);
    }

    hr{
        height: 1px;
        background-color: #95D5B2;
        border: none;
    }

    .faq-title{
        font-family: 'ClashGrotesk-Regular';
    }

    .faq-answer{
        font-family: 'ClashGrotesk-Extralight';
    }

    .faq{
        font-family: 'ClashGrotesk-SemiBold';
    }

    h4{
        font-family: 'ClashGrotesk-SemiBold';
        line-height: 0.6;
    }

    .second-top-height{
        height: 85%;
    }

    .second-bottom-height{
        height: 15%;
    }

    .zero{
        -webkit-text-stroke: 1px #40916C;
        font-size: 24rem;
        line-height: 0.75;
    }

    .inputBelowZero{
        width: 88%;
    }

    .light-green-bg{
        background: #95D5B2;
    }

    .companiesHeight{
        height: 21%;
    }

    .foldInput{
        height: 3.7rem;
    }

    .foldInput input{
        font-family: 'ClashGrotesk-Medium';
        color: rgb(157, 170, 188);
        font-size: 1rem;
    }

    .join-btn{
        font-family: 'ClashGrotesk-SemiBold';
    }

    .light-green-border{
        border: 1px #95D5B2 solid;
    }

    .inner-cool-border{
        box-shadow: 31px 31px 31px; 
        border: 3px #95D5B2 solid; 
        filter: blur(31px);
    }

    .cool-border{
        height: 1px;
        width: 200px;
        border: 1px #95D5B2 solid;
    }

    h1{
        font-family: 'ClashGrotesk-Medium';
        font-size: 3.8rem;
        line-height: 1;
    }

    h2{
        font-size: 1.3rem;
    }

    @media (min-width: 768px) { 
        h1{
            font-size: 5.5rem;
        }

        h2{
        font-size: 1.5rem;
        }

        .foldInput{
            height: 3.9rem;
        }

        .foldInput input{
            font-size: 1.2rem;
        }

        .zero{
        -webkit-text-stroke: 1px #40916C;
        font-size: 55rem;
        line-height: 0.75;
        }

        .inputBelowZero{
            width: 50%;
        }
    }

    .light-green-text{
        color: #95D5B2;
    }

    .join-link{
        text-decoration: underline;
        font-family: ClashGrotesk-Bold;
        font-size: 20px;
    }

    .header{
        font-family: ClashGrotesk-Bold;
    }

    .darkGreen{
        background: #1B4332;
    }

    .darkest{
        background: #1B152D;
        opacity: 0.8;
    }

    .nav{
        width: 90%;
    }

    .normal-text{
        color: #40916C;
    }
</style>