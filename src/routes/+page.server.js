/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
    try {
        // Get date from query parameter, default to today if not provided
        const dateParam = url.searchParams.get('date');
        const apiUrl = dateParam ? `/api?date=${dateParam}` : '/api';
        
        const response = await fetch(apiUrl);
        if (response.ok) {
            const apiComplete = await response.json();
            return { apiComplete };
        }
        throw new Error(`Failed to load data: ${response.status}`);
    } catch (error) {
        console.error('Error loading APOD data:', error);
        throw error;
    }
}

