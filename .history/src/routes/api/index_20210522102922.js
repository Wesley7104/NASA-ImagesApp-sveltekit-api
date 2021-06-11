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
export let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
export let apiURL_NextImage = apiURLComplete.concat(apiNextDay)

export async function get() {
    let response = await fetch(apiURLComplete);
    data = await response.json();
    setDays();
    apiToday = "&date=" + today;
    apiPreviousDay = "&date=" + (previous);
    apiNextDay = "&date=" + (next)
    // console.log("Today: " + apiToday + ";" + " Previous Day: " + apiPreviousDay + ";" + " Next Day: " + apiNextDay );
    return {
        body: data,
    };
}

function setDays() {
    today = format(new Date(), 'yyyy-MM-dd');
    let tempDate = subDays(new Date(today), 0);
    previous = format(new Date(tempDate), 'yyyy-MM-dd');
    let tempDate2 = addDays(new Date(today), 2);
    next = format(new Date(tempDate2), 'yyyy-MM-dd');
    // console.log(previous, today, next);
}

export async function getPreviousImage() {
    let response = await fetch(apiURL_PreviousImage);
    moreData = await response.json();
    return {
        body: moreData,
    };
}