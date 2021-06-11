let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
let apiURL3 = "?date=";
export let apiURLComplete = apiURL.concat(apiURL2);

export async function get() {
    let response = await fetch(apiURLComplete);
    data = await response.json();
    apiURL3 = setInitialDate(data.date);
    console.log(data.date + " " + apiURL3);
    return {
        body: data,
    };
}

export async function setInitialDate(data) {

}