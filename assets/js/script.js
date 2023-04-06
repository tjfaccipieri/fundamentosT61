// Declaração de variaveis;
// Estruturas de decisão;
// Estruturas de repetição;
// Função;

// Criação de variaveis
// escopo global e pode ser redefinido - não é mais indicado oficialmente
var nomeDaVar
// escopo local e pode ser redefinido
let nomeDoLet
// escopo local e NÃO pode ser redefinido
const nomeDaConst = 'thiago'

// Capturando elementos da DOM
const nome = window.document.getElementById('nome')
// const input = window.document.getElementsByTagName('input')

// Criando funções com o JS
function lerNome() {
  const txtNome = document.querySelector('#txtNome')
  // console.log(nome.value.length)
  if(nome.value.length < 3){
    // console.log('Nome inválido');
    txtNome.innerHTML = '<small>Nome inválido</small>'
  } else {
    // console.log('Nome válido');
    txtNome.innerHTML = '<small>Nome válido</small>'
  }
}