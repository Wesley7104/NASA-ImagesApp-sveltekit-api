import { format, addDays, subDays } from 'date-fns';

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=";
const apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc&thumbs=true";

function setDays() {
    const today = format(new Date(), 'yyyy-MM-dd');
    const tempDate = subDays(new Date(today), 1);
    const previous = format(new Date(tempDate), 'yyyy-MM-dd');
    return { previous };
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const { previous } = setDays();
    const apiPreviousDay = "&date=" + previous;
    const apiURLComplete = apiURL.concat(apiURL2);
    const apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
    const response = await fetch(apiURL_PreviousImage);
    const data = await response.json();
    
    return Response.json(data);
}

