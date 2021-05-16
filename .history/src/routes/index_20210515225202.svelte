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
    let apiComplete;
  </script>

<main>
    <h1>Nasa Image Viewer</h1>
    <hr />
    <!-- {#each apiData as apiItem} -->
    <h2>{apiComplete.title}</h2>
    <img src={apiComplete.url} alt={apiComplete.title}>
    <h3>{apiComplete.explanation}</h3>
    <p>{apiComplete.copyright}</p>
    <!-- {/each} -->

</main>