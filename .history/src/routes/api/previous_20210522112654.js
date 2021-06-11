import { format, addDays, subDays } from 'date-fns';
import { imgDate, imgDate } from './index';

let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiPreviousDay = "&date=";
let today;
let previous;

imgDate = imgDate;

export async function get() {
    setDays();
    apiPreviousDay = "&date=" + (previous);
    let apiURLComplete = apiURL.concat(apiURL2);
    let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
    let response = await fetch(apiURL_PreviousImage);
    data = await response.json();
    console.log(imgDate);
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