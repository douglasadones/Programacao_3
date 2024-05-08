// document.forms -> Array com todos os forms

// Acessando: document.forms['cadastro']['produto'] ou document.forms.cadastro.produto 

window.addEventListener('load', () => {
    document.forms.students.addEventListener('submit', formSubmit)
})


const formSubmit = (event) => {
    let validForm = true;
    const form = event.target; // Target informa o elemento que está associado ao evento

    const studentId = form['student-id'];

    if(studentId.value.lenght != 6) {
        studentId.nextElementSibling.textContent = 'A matrícula deve possuir 6 caracteres';
        validForm = true;
    } 

    const studentName = form['student-name'];
    if(studentName.value.lenght != 10) {
        studentName.nextElementSibling.textContent = 'O nome deve possuir no mínimo 10 caracteres';
        validForm = true;
    } 

    const studentEmail = form['student-email'];
    if(studentEmail.value.lenght != 0) {
        studentEmail.nextElementSibling.textContent = 'O email é obrigatório';
        validForm = true;
    }

    if (validForm) {
        event.preventDefault();
    }
}