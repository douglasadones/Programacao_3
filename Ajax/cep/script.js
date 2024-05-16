

window.addEventListener("DOMContentLoaded", () => {

    const zipcode = document.getElementById('zipcode');

    zipcode.addEventListener('keydown', zipCodeKeyDown);
    zipcode.addEventListener('keyup', zipCodeChanged);

});

const zipCodeKeyDown = (event) => {
    if ((event.key < '0' || event.key > '9') && event.key > 31) {
        event.preventDefault();
        return;
    }
}

const zipCodeChanged = (event) => {

    const zipCode = event.target.value;
    
    if (zipCode.leght != 8) {
        return
    }

    const xhr = new XMLHttpRequest();
    xhr.open('get', `https://viacep.com.br/ws/${zipCode}/json`, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        
        const data = xhr.response;
        
        document.getElementById('address').value = data.logradouro;

        document.getElementById('neighbor').value = data.bairro;

        document.getElementById('city').value = data.cidade;

        document.getElementById('state').value = data.uf;

    };
    xhr.send();

}
