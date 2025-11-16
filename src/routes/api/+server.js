import { format } from 'date-fns';
import { NASA_API_KEY } from '$env/static/private';

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=";
const thumbsParam = "&thumbs=true";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    try {
        // Check if API key is configured
        if (!NASA_API_KEY) {
            console.error('NASA_API_KEY is not configured');
            return Response.json(
                { error: 'NASA API key is not configured' },
                { status: 500 }
            );
        }
        
        // Get date from query parameter
        // If no date param provided, don't include date parameter
        // This lets NASA API determine "today" based on their server time
        const dateParam = url.searchParams.get('date');
        const apiURLComplete = apiURL + NASA_API_KEY + thumbsParam;
        const apiURLWithDate = dateParam 
            ? apiURLComplete + "&date=" + dateParam
            : apiURLComplete;
        
        const response = await fetch(apiURLWithDate, {
            // Add timeout to prevent hanging requests
            signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown error');
            console.error(`NASA API error: ${response.status} ${response.statusText}`, errorText);
            return Response.json(
                { error: `Failed to fetch APOD data: ${response.status} ${response.statusText}` },
                { status: response.status }
            );
        }
        
        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error('Failed to parse NASA API response as JSON:', jsonError);
            const text = await response.text().catch(() => 'Unable to read response');
            return Response.json(
                { error: 'Invalid response from NASA API' },
                { status: 500 }
            );
        }
        
        // Check if NASA API returned an error in the response body
        if (data.error) {
            console.error('NASA API error:', data.error);
            return Response.json(
                { error: data.error.message || data.error },
                { status: 400 }
            );
        }
        
        return Response.json(data);
    } catch (error) {
        console.error('Error fetching APOD data:', error);
        // Handle timeout and abort errors
        if (error.name === 'AbortError' || error.name === 'TimeoutError') {
            return Response.json(
                { error: 'Request timeout - NASA API took too long to respond' },
                { status: 504 }
            );
        }
        return Response.json(
            { error: error.message || 'Failed to fetch APOD data' },
            { status: 500 }
        );
    }
}

