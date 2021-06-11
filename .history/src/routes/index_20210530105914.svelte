
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
    import { format, addDays, subDays } from 'date-fns';
    import { todaysDate, initialDate, currentImgDate } from './stores';
    import { onDestroy } from 'svelte';
import { page } from '$app/stores';

   export let apiComplete;
   export let apiImage;
   export let isImgPublicDomain;
   export let apiVideo;

   let showModal = false;

   let today = $todaysDate;
   let initial = $initialDate;
   let current = currentImgDate;
   
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

    function decrementDate() {
      current = subDays(new Date(currentImgDate), 0);
      currentImgDate.set(current);
      //currentImgDate.update(format(new Date(tempDate), 'yyyy-MM-dd'));
      console.log(current);
    };

    export async function getPreviousDay() {
        decrementDate();
          const response = await fetch('/api/previousDay');
          if (response.ok) return { props: { apiComplete: await response.json() } 
          } 
          console.log(apiComplete.date);
        return {
          status: response.status,
          error: new Error()
        }
    
    };

    //console.log(apiComplete.thumbnail_url, apiImage, apiVideo);

    //console.log(isImgPublicDomain, $todaysDate, $initialDate, $currentImgDate)

  </script>

  <svelte:head>
    <title>Astronomy Picture of the Day</title>
  </svelte:head>

<main>
  <div class="container">
    
    
    <!-- title Section -->
    <section class="" >
      <!-- style="background-image: url('{apiImage}')"
        <img src={apiComplete.url} alt={apiComplete.title}> -->
      <div class="">
        <p class="text myTextStyle has-text-centered" >Astronomy Picture of the Day (APOD):</p>
        <h1 class="title myTextStyle has-text-centered"> {apiComplete.title}</h1>
      </div> 
      <div class="columns is-centered">
        <!-- Nav Button Section -->
        <div class="column is-four-fifths">
              <nav class="pagination is-dark is-centered" role="navigation" aria-label="pagination">
                    <ul class="pagination-list">
                    <li>
                      <a class="pagination-next btn">Choose Date</a>
                    </li>
                        <li>
                          <a class="pagination-link btn is-current" aria-label="Goto page 1">{apiComplete.date}</a>
                        </li> 
                      <li>
                        <a on:click={getPreviousDay()} class="pagination-previous btn">Previous Image</a>
                      </li>
                    </ul>
              </nav>
          </div>
      </div>
      <!-- image section -->
      <div class="hero is-fullheight has-background">
        <img class="hero-background" src={apiImage} alt={apiComplete.title}>
        <div class="hero-body">
          <div class="container">
            {#if apiVideo}
                <a class="button btn" style="color:black; background-color:darkgrey;" href={apiComplete.url} target="_blank" rel="noopener noreferrer">Play Video</a>
            {/if}
            </div>
          </div>
      </div>
      <!-- text section -->
      <div class="container">
        <div class="hero-foot">
          <h1 class="title text myTextStyle">Image Copyright Info: {isImgPublicDomain}</h1>
          <h3 class="subtitle text myTextStyle">{apiComplete.explanation}</h3>
        </div>
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
  background-color: hsl(0, 0%, 9%);
  box-shadow: 5 2px #666;
  /* transform: translateY(2px); */
  }

  .hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
  
  </style>