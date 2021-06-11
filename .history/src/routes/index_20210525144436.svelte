
<script context="module">
  
    export async function load({ fetch }) {
      const response = await fetch('/api');
      if (response.ok) return { props: { apiComplete: await response.json() } 
    }
    
    return {
      status: response.status,
      error: new Error()
     }
    
    };

  </script>
  <script>
    import Modal from './components/Modal.svelte';
    import { format, addDays, subDays } from 'date-fns';
    import { todaysDate, initialDate, currentImgDate } from './stores';
    import { onDestroy } from 'svelte';

   export let apiComplete;
   export let apiImage;
   export let isImgPublicDomain;
   export let apiVideo;

   let showModal = false;

   let today = $todaysDate;
   let initial = $initialDate;
   let current = $currentImgDate;

   const unsubscribe = todaysDate.subscribe(value => today = value);
   const unsubscribe2 = initialDate.subscribe(value => initial = value);
   const unsubscribe3 = currentImgDate.subscribe(value => current = value);
   
   onDestroy(unsubscribe, unsubscribe2, unsubscribe3);

    // check for copyright of image
    isImgPublicDomain = apiComplete.copyright || "Public Domain Image";

    // replace initial stores values with actual dates.
    if (today = "2000-01-01"){
    let tempDate = format(new Date(), 'yyyy-MM-dd');
    todaysDate.set(tempDate);
    initialDate.set(tempDate);
    currentImgDate.set(tempDate);
    };

    //check for media type (if video then add video thumnail and url)
    if (apiComplete.media_type == "video") {
      apiImage = apiComplete.thumbnail_url;
      apiVideo = apiComplete.url;
    } else {
      apiImage = apiComplete.url;
    }

    //console.log(apiComplete.thumbnail_url, apiImage, apiVideo);

    //console.log(isImgPublicDomain, $todaysDate, $initialDate, $currentImgDate)
    
    function openRequestedPopup() {
       alert({apiImage});
     }

  </script>

<Modal message="Popup Modal message text." {showModal} />
<main>
  <div class="container">
    
    
    <!-- Hero Section -->
    <section class="hero is-fullheight has-background" >
      <!-- style="background-image: url('{apiImage}')"
        <img src={apiComplete.url} alt={apiComplete.title}> -->
      <div class="hero-head">
        <p class="text myTextStyle has-text-centered" >Astronomy Picture of the Day (APOD):</p>
        <h1 class="title myTextStyle has-text-centered"> {apiComplete.title}</h1>
      </div> 
      <div class="columns is-centered">
        <!-- Button Section -->
        <div class="column is-four-fifths">
          <nav class="pagination is-dark is-centered" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
           <li>
             <a class="pagination-next btn">Choose Date</a>
          </li>
              <li>
                <a class="pagination-link btn is-current" aria-label="Goto page 1">{$currentImgDate}</a>
              </li> 
            <li>
              <a sveltekit:prefetch href="previous" class="pagination-previous btn">Previous Image</a>
            </li>
          </ul>
          </nav>
          </div>
      </div>

      <div class="hero-body ">
        <img src={apiImage} alt={apiComplete.title}>
      </div>
      {#if apiVideo}
          <div class="columns is-centered">
            <a class="button" {showModal}>Play</a>
          </div>
        {/if}
      <div class="hero-foot">
          <h2 class="text myTextStyle">{apiComplete.explanation}</h2>
        
          <p class ="text myTextStyle">Image Copyright Info: {isImgPublicDomain}</p>
      </div>
    </section>
    
    
      
  </div>


</main>

  
<style>
  .myTextStyle {
    padding: 1rem;
    color: #d4d4d4;
    background-color: hsla(0, 0%, 34%, 0.726);
    
  }

  .btn {
    padding: 1rem;
    color:hsla(0, 0%, 87%, 0.726);
  }

  .btn:hover {
    color:hsla(0, 0%, 22%, 0.726);
    background-color:hsla(0, 0%, 66%, 0.973);
  }

  .btn:active {
  background-color: hsl(187, 64%, 43%);
  box-shadow: 5 2px #666;
  transform: translateY(2px);
  }
  
  </style>