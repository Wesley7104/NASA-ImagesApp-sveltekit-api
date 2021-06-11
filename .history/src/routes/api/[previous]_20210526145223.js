import { format, addDays, subDays } from 'date-fns';
import { todaysDate, initialDate, currentImgDate } from '../stores';

let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc&thumbs=true";
let apiPreviousDay;
let today;
let previous;

const unsubscribe = currentImgDate.subscribe(value => {
    previous = value;
    console.log(previous);
});

function decrementDate() {
    currentImgDate.update(previous);
    //currentImgDate.update(format(new Date(tempDate), 'yyyy-MM-dd'));
    console.log(previous, $currentImgDate);
}


export async function get() {
    decrementDate();
    // const { date } = $currentImgDate;
    apiPreviousDay = "&date=" + (previous);
    let apiURLComplete = apiURL.concat(apiURL2);
    let apiURL_PreviousImage = apiURLComplete.concat(apiPreviousDay);
    let response = await fetch(apiURL_PreviousImage);
    data = await response.json();
    // console.log();
    return {
        body: data,
    };
}