const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_MQNXMF4OxXnbKVRaX5YMRdgeaRyzDuRiDsviN8eO9HbGI8J1y43NExlsPJNvTzyn'
const button = document.getElementById('search-btn');

var breeds;

const main = () => {

  const xhr = new XMLHttpRequest()
  xhr.open('get', `${catsApiUrl}/breeds`)
  xhr.setRequestHeader('X-Api-Key', catsApiKey)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status != 200) {
      return
    }

    const breeds = document.getElementById('breed')
    breeds.onchange = () => {
      const breedName = document.getElementById('breed-name')
      breedName.value = breeds.options.selectedIndex;
    }
    const options = xhr.response.map((breed) => `<option value="${breed.id}">${breed.name}</option>`)
    breeds.innerHTML = options.join('')

  }
  xhr.send() // retorna um registro interno para que o programa continue e trata de forma async os dados da requisição.

}

window.addEventListener('DOMContentLoaded', main)