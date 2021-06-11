<script context="module">
  
    export async function load({ fetch }) {
      const response = await fetch('/api');
  
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
   export let todaysDate;
   if (apiComplete.url){
     apiImage = apiComplete.url;
  } else {
    apiImage = "no image available... Sorry something is broken... :(";
  }
   export function getImgCopyrightData(apiData) {
    if (apiComplete.copyright === "undefined"){
      isImgPublicDomain = "Public Domain Image";
    } else {
      isImgPublicDomain = apiData.copyright;
    }
     return isImgPublicDomain;
   };

   export function getTodaysDate() {
    todaysDate = toString(apiComplete.date);
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
             <a class="pagination-previous btn" style="padding: 1rem margin: 1rem">Next Image</a>
          </li>
              <li>
                <a class="pagination-link btn active" aria-label="Goto page 1">{apiComplete.date}</a>
              </li> 
            <li>
              <a class="pagination-next btn">Previous Image</a>
              
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
    color:hsla(0, 0%, 87%, 0.726);
  }

  .btn:hover {
    color:hsla(0, 0%, 22%, 0.726);
    background-color:hsla(0, 0%, 66%, 0.973);
  }

  .btn:active {
  background-color: hsl(187, 80%, 71%);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
  
  </style>