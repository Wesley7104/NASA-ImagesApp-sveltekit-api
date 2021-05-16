import SECRET_KEY_NASA_GOV from '';
let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 = meta.env.SECRET_KEY_NASA_GOV;
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