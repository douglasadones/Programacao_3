const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_MQNXMF4OxXnbKVRaX5YMRdgeaRyzDuRiDsviN8eO9HbGI8J1y43NExlsPJNvTzyn'

const main = () => {
    // window.location.search por causa do .search, é retornado apenas os parâmetros do url da janela.
    const params = new URLSearchParams(window.location.search)
    const breeds = params.get('breeds')
    const count = params.get('count') ?? 5
    if (!breeds) {
        return
    }

    const breedName = document.getElementById('breed')
    breedName.innerHTML = xhr.response[0].breeds[0].name;

    const xhr = new XMLHttpRequest();
    xhr.open('get', `${catsApiUrl}/images/search?limit=${count}&breeds_id=${breeds}`)
    xhr.setRequestHeader('X-Api-Key', catsApiKey)
    xhr.responseType = 'json'
    xhr.onload = () => {
        if (xhr.status != 200) {
            return
        }

        const elements = xhr.response.map((data) => `<img src="${data.url}">`)
        const images = document.getElementById('images')
        images.innerHTML = elements.join('')
    }
    xhr.send();
}

window.addEventListener('DOMContentLoaded', main)
