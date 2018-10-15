const senhas = document.querySelectorAll('input[type=password]');
const botaoVerSenhas = document.querySelector('button.senhas');
const inputCpf = document.querySelector('input[name=cpf]');

const validarSenha = () => {
  if (senhas[0].value && senhas[1].value) {
    if (senhas[0].value !== senhas[1].value) {
      document.querySelector('.erro-senha').style.visibility = 'visible';

      for (const input of senhas) {
        input.style.outline = '1px solid red';
      }
    }
  }
}

const resetSenha = () => {
  document.querySelector('.erro-senha').style.visibility = '';

  for (const input of senhas) {
    input.style.outline = '';
  }
}

const mostrarSenhas = event => {
  for (const input of senhas) {
    input.type = 'text';
  }

  event.target.style.backgroundColor = 'rgba(137, 43, 226, 0.35)';
}

const esconderSenhas = () => {
  for (const input of senhas) {
    input.type = 'password';
  }

  event.target.style.backgroundColor = '';
}

const validarCPF = () => {
  if(inputCpf.value.length !== 11){
    document.querySelector('.erro-cpf').style.visibility = 'visible';
    return;
  }

  let numeros = inputCpf.value.split('');
  let total = 0;

  for(let numero of numeros){
    total += Number(numero);
  }

  if(total != 33 && total != 44 && total != 55 && total != 66){
    document.querySelector('.erro-cpf').style.visibility = 'visible';
    return;
  }

  document.querySelector('.erro-cpf').style.visibility = 'hidden';
}

for (const input of senhas) {
  input.onblur = validarSenha;
  input.onchange = resetSenha;
}

botaoVerSenhas.onmousedown = mostrarSenhas;
botaoVerSenhas.onmouseup = esconderSenhas;
inputCpf.onblur = validarCPF;