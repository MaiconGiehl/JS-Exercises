function enableOrDisableButton() {
    const checkBox = document.querySelector("#contrato").checked
    const cadastrar = document.querySelector("input[value='cadastrar']")

    if (checkBox == true) {
        cadastrar.disabled = false
    } else {
        cadastrar.disabled = true
    }
}

function cadastrar () {
    let nome = document.getElementById("txtNome").value;
    let email = document.getElementById("txtEmail").value;
    alert(`Contrato confirmado por: ${nome} de email: ${email}`);
}
