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
  </script>

<main>
  <section class="hero hero-bg">
   <img src={apiComplete.url} alt={apiComplete.title}>
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

.hero-bg {
  background-image:url(apiComplete.url)
}

</style>