<script context="module">
  import { format, addDays, subDays } from 'date-fns';
  import { todaysDate, initialDate, currentImgDate } from './stores';
  import { onDestroy } from 'svelte';
  import { SveltyPicker } from 'svelty-picker';

    export async function load({ fetch, page }) {
      const { date } = currentImgDate;
      const response = await fetch('/api/${date}');
      if (response.ok) return { props: { apiComplete: await response.json() } };
 
    return {
      status: response.status,
      error: new Error()
     };
    }

  </script>
  <script>
   export let apiComplete;
   export let apiImage;
   export let isImgPublicDomain;
   export let chooseDate = todaysDate;
  //  export let todaysDate;
  //  export let initialDate;

   if (apiComplete.url){
     apiImage = apiComplete.url;
  } else {
    apiImage = "no image available... Sorry something is broken... :(";
  }

  // check for copyright of image
  isImgPublicDomain = apiComplete.copyright || "Public Domain Image";

  //check for media type (if video then add video thumbnail and url)
  if (apiComplete.media_type === "video") {
      apiImage = apiComplete.thumbnail_url;
      apiVideo = apiComplete.url;
    } else {
      apiImage = apiComplete.url;
    }

  export function decrementDate() {
      current = subDays(new Date($currentImgDate), 0);
      current = format(new Date(current), 'yyyy-MM-dd');
      currentImgDate.set(current);
      return {
        current
      }
      //console.log(current);
    };
   
  </script>

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
              <a href={decrementDate()} class="pagination-previous btn">Previous Image</a>
            </li>
                <li>
                  <a href="{apiComplete.date}" class="pagination-link btn is-current" aria-label="Goto page 1">{apiComplete.date}</a>
                </li> 
              <li>
                <SveltyPicker inputClasses="form-control" format="yyyy-mm-dd" bind:value={chooseDate}></SveltyPicker>
              </li>
          </ul>
          </nav>
          </div>
      </div>

      <div class="hero-body ">
        <img src={apiComplete.url} alt={apiComplete.title}>
      </div>
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