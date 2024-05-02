let div = document.getElementById('dn')
let btn = document.querySelector('button')



window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', () => {
        div.innerHTML = "<p>Hello World!</p>";
        let p = document.querySelector('p');
        p.style.display = 'flex';
        p.style.justifyContent = 'center';
        p.style.alignItems = 'center';
        p.style.fontSize = '2em';

        if (div.style.visibility === 'visible') {
            div.style.visibility = 'hidden';
            btn.innerText = 'Mostrar';
        } else {
            div.style.visibility = 'visible';
            btn.innerText = 'Esconder';
        }
    })
})
