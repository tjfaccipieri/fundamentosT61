const nome = window.document.getElementById('nome');
const email = window.document.getElementById('email');
const assunto = window.document.getElementById('assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
  const txtNome = document.querySelector('#txtNome');
  if (nome.value.length < 3) {
    txtNome.innerHTML = '<small>Nome inválido</small>';
    nome.style.borderColor = 'red';
    nomeOk = false;
  } else {
    txtNome.innerHTML = '<small>Nome válido</small>';
    nome.style.borderColor = 'green';
    nomeOk = true;
  }
}

function validaEmail() {
  const txtEmail = document.querySelector('#txtEmail');
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = '<small>E-mail inválido</small>';
    email.style.borderColor = 'red';
    emailOk = false;
  } else {
    txtEmail.innerHTML = '<small>E-mail válido</small>';
    email.style.borderColor = 'green';
    emailOk = true;
  }
}

function validaAssunto() {
  const txtAssunto = document.querySelector('#txtAssunto');
  if (assunto.value.length <= 10) {
    txtAssunto.innerHTML = '<small>Assunto válido</small>';
    assunto.style.borderColor = 'green';
    assuntoOk = true
  } else {
    txtAssunto.innerHTML = '<small>Assunto inválido</small>';
    assunto.style.borderColor = 'red';
    assuntoOk = false
  }
}

function enviar() {
  if(nomeOk === true && emailOk === true && assuntoOk === true) {
    alert('Formulário enviado com sucesso! Aguarde uma resposta, que um dia ela chega')
  } else {
    alert('Preencha o formulário corretamente, por favor. Sujeito a paulada')
  }
}
