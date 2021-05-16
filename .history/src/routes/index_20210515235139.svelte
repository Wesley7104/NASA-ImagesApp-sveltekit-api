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
  <container>
    <h2 class="title is-2">{apiComplete.title}</h2>
    <img src={apiComplete.url} alt={apiComplete.title}>
    <h3>{apiComplete.explanation}</h3>
    <p>"Copyright Info: "{apiComplete.copyright}</p>
  </container>

</main>

<style>


</style>