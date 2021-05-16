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
  <container class="">
    <h3 class="myTextStyle">{apiComplete.explanation}</h3>
    <p>"Copyright Info: "{apiComplete.copyright}</p>
  </container>
  <section class="hero">
    <div class="hero-body background-image">
    <img src={apiComplete.url} alt={apiComplete.title}>
      <div class="container">
        <h1 class="title">
          {apiComplete.title}
        </h1>
        <h2 class="subtitle">
          Hero subtitle
        </h2>
      </div>
    </div>
  </section>

</main>

<style>
.myTextStyle {
  color: #b9b9b9;
}

.background-image {
  background-image:url(src={apiComplete.url})
}

</style>