let apiURL={"https://api.nasa.gov/planetary/apod?api_key=" : import.meta.env.SECRET_KEY_NASA_GOV};
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