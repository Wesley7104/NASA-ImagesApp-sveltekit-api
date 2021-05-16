let apiURL="https://api.nasa.gov/planetary/apod?api_key=";
let apiURL2 ={"meta.env.SECRET_KEY_NASA_GOV"};
let apiURLComplete = apiURL.concat(apiURL2);
console.log(apiURLComplete);
/* let options= {
    method: 'GET',
    mode: 'no-cors'
} */

let imageID;

export async function get() {
    let response = await fetch(apiURL);
    data = await response.json();
    return {
        body: data,
    };
}