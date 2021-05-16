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
  <section class="hero img-responsive" style="background-image: url('{apiImage}')">
   <!-- <img src={apiComplete.url} alt={apiComplete.title}> -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {apiComplete.title}
        </h1>
        <br>
        <h2 class="text myTextStyle">{apiComplete.explanation}</h2>
        <br>
        <p class ="myTextStyle">Copyright Info: {apiComplete.copyright}</p>
      </div>
    </div>
  </section>

</main>

  
<style>
  .myTextStyle {
    color: #b9b9b9;
  }

  .img-responsive {
    .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
   }
  
  .hero-bg {
    /* background-image:url(apiImage); */
      background-repeat: no-repeat;
      background-size: stretch;
  }
  
  </style>