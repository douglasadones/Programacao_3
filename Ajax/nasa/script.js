const API = live_MQNXMF4OxXnbKVRaX5YMRdgeaRyzDuRiDsviN8eO9HbGI8J1y43NExlsPJNvTzyn;
const URLsite = "https://api.thecatapi.com/v1/images/search";
let response;

window.addEventListener("DOMContentLoaded", main)



const main = () => {

    const breed = document.getElementById('breed')

    const xhr = new XMLHttpRequest();

    xhr.open('get', `${URLsite}/breeds`, true);
    xhr.setRequestHeader('X-Api-Key', API);
    xhr.responseType = 'json';

    console.log(xhr.response)

}
