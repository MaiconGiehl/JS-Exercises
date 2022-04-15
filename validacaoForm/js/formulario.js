const btnAdc = document.getElementById('btn');

const check = document.getElementById('chkAceito');
const titulo = document.getElementById('txtTitulo');
const descricao = document.getElementById('txtDescricao');

check.addEventListener('click', function() {
    if(btnAdc.disabled == false) {
        btnAdc.disabled = true;
    } else {
        btnAdc.disabled = false;
    }
})

const spanCaracteres = document.querySelector('#contador span');

descricao.addEventListener('keyup', function () {
    spanCaracteres.textContent = 255 - descricao.value.length;
});

const feedbackMessage = document.getElementById('feedbackMessage');
const fechar = document.querySelector('.fa-close');

btnAdc.addEventListener('click', function() {
    if (titulo.value.length != 0 && descricao.value.length) {
        feedbackMessage.style.color = 'white';
        feedbackMessage.style.backgroundColor = 'green'
        feedbackMessage.classList.add('show');
    } else if (titulo.value.length == 0) {
        feedbackMessage.classList.add('show');
        titulo.focus()
    }
})


fechar.addEventListener('click', function() {
    feedbackMessage.classList.remove('show');
})