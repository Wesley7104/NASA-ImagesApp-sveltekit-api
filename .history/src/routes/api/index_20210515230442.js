let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = "72fi8R1OeCsgajxBRDdYjMKaGIndl5dl3CJT4wAc";
export let apiURLComplete = apiURL.concat(apiURL2);
console.log(apiURLComplete);
/* let options= {
    method: 'GET',
    mode: 'no-cors'
} */

export async function get() {
    let response = await fetch(apiURLComplete);
    data = await response.json();
    return {
        body: data,
    };
}