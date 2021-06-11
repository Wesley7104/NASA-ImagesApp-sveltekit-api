import { format, addDays, subDays, startOfToday } from 'date-fns'

let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiToday = "&date=";
let apiPreviousDay = "&date=";
let apiNextDay = "&date=";
let today;
let previous;
let next;
export let apiURLComplete = apiURL.concat(apiURL2);


export let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay)

export async function get() {
    let response = await fetch(apiURLComplete);
    data = await response.json();
    apiToday = "&date=" + today;
    apiPreviousDay = "&date=" + (previous);
    apiNextDay = "&date=" + (next)
    console.log("Today: " + apiToday + ";" + " Previous Day: " + apiPreviousDay + ";" + " Next Day: " + apiNextDay );
    return {
        body: data,
    };
}

function setDays() {
    today = format(new Date(), 'yyyy-MM-dd');
    
}

export async function getPreviousImage() {
    let response = await fetch(apiURL_PreviousImage);
    moreData = await response.json();
    return {
        body: moreData,
    };
}