import { format } from 'date-fns';
import { NASA_API_KEY } from '$env/static/private';

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=";
const thumbsParam = "&thumbs=true";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // Get date from query parameter, default to today if not provided
    const dateParam = url.searchParams.get('date');
    const dateToUse = dateParam || format(new Date(), 'yyyy-MM-dd');
    
    const apiDateParam = "&date=" + dateToUse;
    const apiURLComplete = apiURL + NASA_API_KEY + thumbsParam;
    const apiURLWithDate = apiURLComplete + apiDateParam;
    const response = await fetch(apiURLWithDate);
    const data = await response.json();
    
    return Response.json(data);
}

