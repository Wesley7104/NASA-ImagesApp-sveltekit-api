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
   if (apiComplete.url){
     apiImage = apiComplete.url;
  } else {
    apiImage = "no image available... Sorry something is broken... :(";
  }
   
  </script>

<main>
  <div class="container">
    <section class="hero is-fullheight has-background" >
      <!-- style="background-image: url('{apiImage}')"
        <img src={apiComplete.url} alt={apiComplete.title}> -->
      <div class="hero-head">
        <h4>Image Title:</h4>
        <h1 class="title myTextStyle"> {apiComplete.title}</h1>
      </div>  
      <div class="hero-body">
        <img src={apiComplete.url} alt={apiComplete.title}>
      </div>
      <div class="hero-foot">
          <h2 class="text myTextStyle">{apiComplete.explanation}</h2>
        
          <p class ="text myTextStyle">Image Copyright Info: {apiComplete.copyright}</p>
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
  
  </style>