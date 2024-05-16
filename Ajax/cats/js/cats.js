const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_MQNXMF4OxXnbKVRaX5YMRdgeaRyzDuRiDsviN8eO9HbGI8J1y43NExlsPJNvTzyn'
const button = document.getElementById('search-btn');

const main = () => {

  const xhr = new XMLHttpRequest()
  xhr.open('get', `${catsApiUrl}/breeds`)
  xhr.setRequestHeader('X-Api-Key', catsApiKey)
  xhr.responseType = 'json'
  xhr.onload = () => {
    for (let i of xhr.response) {
      console.log(i.name)
      document.getElementById('breed').innerHTML += `<option value="${i.id}">${i.name}</option>`
    }
    console.log(xhr.response)
  }
  xhr.send()

}

window.addEventListener('DOMContentLoaded', main)