import { format } from 'date-fns';

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=";
const apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc&thumbs=true";
const apiURLComplete = apiURL.concat(apiURL2);

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // Get date from query parameter, default to today if not provided
    const dateParam = url.searchParams.get('date');
    const dateToUse = dateParam || format(new Date(), 'yyyy-MM-dd');
    
    const apiDateParam = "&date=" + dateToUse;
    const apiURLWithDate = apiURLComplete.concat(apiDateParam);
    const response = await fetch(apiURLWithDate);
    const data = await response.json();
    
    return Response.json(data);
}

