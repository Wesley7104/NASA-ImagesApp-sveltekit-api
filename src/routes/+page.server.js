/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
    try {
        // Get date from query parameter
        const dateParam = url.searchParams.get('date');
        // If no date param, don't pass date to let NASA API determine "today"
        // This avoids timezone issues on Vercel where server time might differ
        const apiUrl = dateParam ? `/api?date=${dateParam}` : '/api';
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Failed to load data: ${response.status}`);
        }
        
        const apiComplete = await response.json();
        
        // Check if the API returned an error in the response body
        if (apiComplete.error) {
            throw new Error(apiComplete.error);
        }
        
        return { apiComplete };
    } catch (error) {
        console.error('Error loading APOD data:', error);
        // Return error data instead of throwing to allow the page to render
        return {
            apiComplete: null,
            error: error.message || 'Failed to load APOD data'
        };
    }
}

