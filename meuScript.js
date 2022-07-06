let btn = document.querySelector('.btn')

function mensagem() {
    alert('Meu primeiro código em Javascript');
}

btn.addEventListener('click', () => {
    mensagem()
  })
