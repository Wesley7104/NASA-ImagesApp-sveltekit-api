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
    import apiComplete from '/api';
  </script>

<main>
    <h1>Nasa Image Viewer</h1>
    <hr />
    <!-- {#each apiData as apiItem} -->
    <h2>{apiComplete.name}</h2>
    <!--<img src={completeData.image_files.file_url} alt={completeData.description}>-->
    <h3>{apiComplete.mission}</h3>
    <p>{apiComplete.id}</p>
    <!-- {/each} -->

</main>