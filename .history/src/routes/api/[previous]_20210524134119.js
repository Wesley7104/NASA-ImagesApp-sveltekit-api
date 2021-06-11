import { format, addDays, subDays } from 'date-fns';
import { todaysDate, initialDate, currentImgDate } from './stores';

let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiPreviousDay;
let today;
let previous;



function decrementDate() {
    let tempDate = subDays(new Date(currentImgDate), 0);
    currentImgDate.update(format(new Date(tempDate), 'yyyy-MM-dd'));
    console.log(tempDate, currentImgDate);
}


export async function get() {
    decrementDate();
    const { date } = $currentImgDate;
    apiPreviousDay = "&date=" + (date);
    let apiURLComplete = apiURL.concat(apiURL2);
    let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
    let response = await fetch(apiURL_PreviousImage);
    data = await response.json();
    // console.log();
    return {
        body: data,
    };
}