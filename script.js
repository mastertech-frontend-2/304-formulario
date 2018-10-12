const senhas = document.querySelectorAll('input[type=password]');
const botaoVerSenhas = document.querySelector('button.senhas');

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
  //Precisa ter os 11 dígitos, se não já está errado
  //A soma de todos os números do CPF tem que dar 44, 55 ou 66
}

for (const input of senhas) {
  input.onblur = validarSenha;
  input.onchange = resetSenha;
}

botaoVerSenhas.onmousedown = mostrarSenhas;
botaoVerSenhas.onmouseup = esconderSenhas;