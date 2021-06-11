<script context="module">
    import {currentImgDate} from './stores';
  
      export async function load({ fetch, page }) {
        const { date } = page.params;
        const response = await fetch('/api/${date}');
        if (response.ok) return { props: { apiComplete: await response.json() } };
  
    //   function getImgCopyrightData(apiComplete) {
    //   if (apiComplete.copyright === "undefined"){
    //     isImgPublicDomain = "Public Domain Image";
    //   } else {
    //     isImgPublicDomain = apiData.copyright;
    //   }
    //    return isImgPublicDomain;
    //  };
  
    //  function getTodaysDate() {
    //   todaysDate = toString(apiComplete.date);
    //   initialDate = todaysDate;
    //  };
  
    //  getTodaysDate();
    //  console.log(initialDate);
    //  getImgCopyrightData(apiComplete.copyright);
    //  console.log(isImgPublicDomain);
  
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
    //  export let todaysDate;
    //  export let initialDate;
  
     if (apiComplete.url){
       apiImage = apiComplete.url;
    } else {
      apiImage = "no image available... Sorry something is broken... :(";
    }
     
    </script>

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
                            <a class="pagination-link btn is-current" aria-label="Goto page 1">{current}</a>
                          </li> 
                        <li>
                          <a sveltekit:prefetch href="previous" on:click="" class="pagination-previous btn">Previous Image</a>
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