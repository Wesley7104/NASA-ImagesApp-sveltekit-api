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
  <section class="hero myHeroImage is-fullheight is-primary has-background" style="background-image: url('{apiImage}')">
    <!-- <img src={apiComplete.url} alt={apiComplete.title}> -->
      <div class="hero-body">
        <h1 class="title myTextStyle"> {apiComplete.title}</h1>
      </div>
    </section>
    <div class="container">
      <br>
      <h2 class="text myTextStyle">{apiComplete.explanation}</h2>
      <br>
      <p class ="myTextStyle">Copyright Info: {apiComplete.copyright}</p>
    </div>


</main>

  
<style>
  .myTextStyle {
    color: #d4d4d4;
    background-color: hsla(0, 0%, 34%, 0.726);
    
  }

  .myHeroImage {
    display: block;
  position: absolute;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%);
  bottom: 0;
  left:0;
  right:0;
  height: 75vh;
  width: 100%;
  content: '';
  }
  
  </style>