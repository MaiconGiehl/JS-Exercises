const formulario = document.querySelector('.formCadastro')
const titulo = document.getElementById('txtTitulo');
const descricao = document.getElementById('txtDescricao');

const btnAdc = document.getElementById('btn');
btnAdc.disabled = true;
const check = document.getElementById('chkAceito');


check.addEventListener('click', function() {
    btnAdc.disabled = !this.checked
})

const divContador = document.querySelector('#contador');
const restante = divContador.querySelector('span');
const tamanhoMaximo = descricao.maxLength;

descricao.addEventListener('input', function () {
    divContador.style.display = "block"
    restante.textContent = parseInt(tamanhoMaximo) - parseInt(descricao.value.length);
});

const feedbackMessage = document.getElementById('feedbackMessage');

formulario.addEventListener('submit', function (e) {
    
    if (!titulo.value || !descricao.value) {
        e.preventDefault()
        feedbackMessage.removeAttribute('style')
        feedbackMessage.firstElementChild.innerHTML = "Preencha todos os campos para prosseguir."
        feedbackMessage.classList.add('show');
        fechar.focus()
        fechar.addEventListener('keyup', esconder())
    } else {
        feedbackMessage.firstElementChild.innerHTML = "Sua atividade foi registrada."
        feedbackMessage.style.backgroundColor = "green"
        feedbackMessage.style.color = "white"
        feedbackMessage.classList.add('show');
        
    }
})


const fechar = feedbackMessage.getElementsByTagName('button')[0];
fechar.addEventListener('click', function() {
    feedbackMessage.classList.remove('show');
    titulo.focus()
})
