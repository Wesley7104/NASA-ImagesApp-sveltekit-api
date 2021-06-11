let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiURL3 = "?date=2021-05-20";
export let apiURLComplete = apiURL.concat(apiURL2);
export let apiURL_PreviousImage = apiURL

export async function get() {
    let response = await fetch(apiURLComplete);
    data = await response.json();
    apiURL3 = data.date;
    return {
        body: data,
    };
}
