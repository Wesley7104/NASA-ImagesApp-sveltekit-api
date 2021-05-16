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
  <section class="hero hero-bg" style="background-image: url('{apiImage}')">
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
    color: #d4d4d4;
    background-color: hsla(0, 0%, 34%, 0.726);
    
  }
  
  .hero-bg {
    /* background-image:url(apiImage); */
      background-repeat: no-repeat;
      /* position: absolute; */
    width: 100%;
    height: auto;
    opacity: 100;
  }
  
  </style>