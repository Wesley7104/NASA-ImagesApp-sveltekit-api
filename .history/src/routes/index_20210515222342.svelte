<script context="module">
    export async function load({ fetch }) {
      const response = await fetch('/api');
  
    if (response.ok) return { props: { apiData: await response.json() } };
    
    return {
      status: response.status,
      error: new Error()
     };
    }

  </script>
  <script>
    export let apiData;
  </script>

<main>
    <h1>Nasa Image Viewer</h1>
    <hr />
    {#each apiData as apiItem}
    <h2>{apiItem.name}</h2>
    <!--<img src={completeData.image_files.file_url} alt={completeData.description}>-->
    <h3>{apiItem.mission}</h3>
    <p>{apiItem.id}</p>
    {/each}

</main>