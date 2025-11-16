<script>
  import { format, subDays, addDays, parseISO } from 'date-fns';
  import { goto, invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
  import { todaysDate } from './stores';

  let props = $props();
  
  // Reactively access data from props
  const apiComplete = $derived(props.data?.apiComplete);

  // Reactively get current date from URL query parameter, default to today
  const currentDate = $derived.by(() => {
    const dateParam = $page.url.searchParams.get('date');
    return dateParam || format(new Date(), 'yyyy-MM-dd');
  });

  // Derived previous date for navigation
  const previousDate = $derived.by(() => {
    try {
      const d = parseISO(currentDate);
      if (!isNaN(d.getTime())) {
        return format(subDays(d, 1), 'yyyy-MM-dd');
      }
    } catch(e) {
      // Invalid date
    }
    return format(subDays(new Date(), 1), 'yyyy-MM-dd');
  });

  // Derived next date for navigation
  const nextDate = $derived.by(() => {
    try {
      const d = parseISO(currentDate);
      if (!isNaN(d.getTime())) {
        return format(addDays(d, 1), 'yyyy-MM-dd');
      }
    } catch(e) {
      // Invalid date
    }
    return format(addDays(new Date(), 1), 'yyyy-MM-dd');
  });

  // Derived values - computed from apiComplete
  const isImgPublicDomain = $derived(apiComplete?.copyright || "Public Domain Image");
  const apiImage = $derived(apiComplete?.media_type === "video" ? apiComplete?.thumbnail_url : apiComplete?.url);
  const apiVideo = $derived(apiComplete?.media_type === "video" ? apiComplete?.url : null);

  let datePickerOpen = $state(false);
  let selectedDate = $state(format(new Date(), 'yyyy-MM-dd'));

  async function decrementDate() {
    const formattedDate = previousDate;
    await goto(`/?date=${formattedDate}`);
    await invalidateAll();
  }

  async function incrementDate() {
    const formattedDate = nextDate;
    await goto(`/?date=${formattedDate}`);
    await invalidateAll();
  }

  async function goToCurrentDate() {
    await goto('/');
    await invalidateAll();
  }

  function openDatePicker() {
    datePickerOpen = true;
    selectedDate = currentDate;
  }

  function closeDatePicker() {
    datePickerOpen = false;
  }

  async function handleDateSelect() {
    await goto(`/?date=${selectedDate}`);
    await invalidateAll();
    datePickerOpen = false;
  }
</script>

<svelte:head>
  <title>NASA ImageViewer - APOD</title>
</svelte:head>

<main class="min-h-screen bg-base-300">
  {#if apiComplete}
  <div class="container mx-auto px-2 md:px-4 py-2 md:py-8">
    <!-- title Section -->
    <section>
      <div class="flex flex-row items-center justify-between gap-1 md:gap-2 mb-0.5 md:mb-1 text-xs sm:text-sm md:text-base">
        <p class="text-base-content/70 flex-shrink-0">Image Date: {apiComplete.date}</p>
        <h1 class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-base-content text-right flex-1 min-w-0"><span class="text-base-content/50 hidden sm:inline">Title: </span><span class="sm:hidden">T: </span><span class="truncate">{apiComplete.title}</span></h1>
      </div> 
      <div class="flex justify-center mx-auto mb-1 md:mb-2">
        <!-- Nav Button Section -->
        <div class="w-full justify-center flex flex-row items-center">
          <div class="flex flex-wrap justify-center gap-4" role="group" aria-label="pagination">
            <button type="button" class="btn bg-neutral btn-xs md:btn-sm lg:btn-md hover:bg-neutral-content hover:text-neutral text-xs md:text-sm p-2" onclick={decrementDate}><span class="hidden sm:inline">Previous Image</span><span class="sm:hidden">Prev</span></button>
            <button type="button" class="btn bg-neutral btn-xs md:btn-sm lg:btn-md hover:bg-neutral-content hover:text-neutral text-xs md:text-sm p-2" aria-label="Current date" onclick={goToCurrentDate}>{$todaysDate}</button>
            <button type="button" class="btn bg-neutral btn-xs md:btn-sm lg:btn-md hover:bg-neutral-content hover:text-neutral text-xs md:text-sm p-2" onclick={openDatePicker}><span class="hidden sm:inline">Choose Date</span><span class="sm:hidden">Date</span></button>
            {#if apiComplete.date < $todaysDate}
              <button type="button" class="btn bg-neutral btn-xs md:btn-sm lg:btn-md hover:bg-neutral-content hover:text-neutral text-xs md:text-sm p-2" onclick={incrementDate}><span class="hidden sm:inline">Next Image</span><span class="sm:hidden">Next</span></button>
            {/if}
          </div>
        </div>
      </div>
      <!-- image section -->
      <div class="card bg-neutral shadow-xl w-full h-full p-2 mb-4">
      <div class="relative w-full min-h-[70vh] overflow-hidden rounded-lg">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src={apiImage} alt={apiComplete.title}>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="container mx-auto px-4">
            {#if apiVideo}
              <a class="btn btn-lg bg-gray-700 hover:bg-gray-600 text-white" href={apiVideo} target="_blank" rel="noopener noreferrer">Play Video</a>
            {/if}
          </div>
        </div>
        </div>
      </div>
      <!-- text section -->
      <div class="container mx-auto px-4">
        <div class="space-y-2">
          <div class="card bg-neutral shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-base-content">Image Copyright Info: {isImgPublicDomain}</h2>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title text-base-content">Explanation:</h3>
                  <p class="text-base-content/90">{apiComplete.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {:else}
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-center items-center min-h-[50vh]">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="ml-4 text-lg">Loading...</p>
    </div>
  </div>
  {/if}

</main>

  <!-- Date Picker Modal -->
  <div class="modal" class:modal-open={datePickerOpen} role="dialog" aria-modal="true">
    <div class="modal-box bg-base-100">
      <h3 class="font-bold text-lg mb-4">Choose a Date</h3>
      <input 
        type="date" 
        bind:value={selectedDate}
        max={format(new Date(), 'yyyy-MM-dd')}
        class="input input-bordered w-full mb-4"
      />
      <div class="modal-action">
        <button class="btn" onclick={closeDatePicker}>Cancel</button>
        <button class="btn btn-primary" onclick={handleDateSelect}>Go to Date</button>
      </div>
    </div>
    <button 
      type="button" 
      class="modal-backdrop" 
      onclick={closeDatePicker}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          closeDatePicker();
        }
      }}
      aria-label="Close modal"
    ></button>
  </div>