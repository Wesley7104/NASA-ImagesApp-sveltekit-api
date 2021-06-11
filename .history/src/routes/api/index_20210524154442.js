import { format, addDays, subDays } from 'date-fns';

let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiToday = "&date=";
let apiPreviousDay = "&date=";
let apiNextDay = "&date=";
let today;
let previous;
let next;
export let apiURLComplete = apiURL.concat(apiURL2);
export let imgDate;

export async function get() {
    setDays();
    apiToday = "&date=" + today;
    apiPreviousDay = "&date=" + (previous);
    let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
    let response = await fetch(apiURLComplete);
    data = await response.json();
    
    // console.log("Today: " + apiToday + ";" + " Previous Day: " + apiPreviousDay + ";" + " Next Day: " + apiNextDay );
    return {
        body: data,
    };
}

function setDays() {
    today = format(new Date(), 'yyyy-MM-dd');
    imgDate = today;
    let tempDate = subDays(new Date(today), 0);
    previous = format(new Date(tempDate), 'yyyy-MM-dd');
    let tempDate2 = addDays(new Date(today), 2);
    next = format(new Date(tempDate2), 'yyyy-MM-dd');
    console.log(previous, today, next);
}

// export async function getPreviousImage() {
//     let response = await fetch(apiURL_PreviousImage);
//     moreData = await response.json();
//     return {
//         body: moreData,
//     };
// }