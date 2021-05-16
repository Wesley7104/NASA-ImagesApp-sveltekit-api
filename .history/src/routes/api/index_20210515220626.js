import apiURL2 from 'meta.env.SECRET_KEY_NASA_GOV';

let apiURL={"https://api.nasa.gov/planetary/apod?api_key=" : apiURL2};
console.log(apiURL);
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