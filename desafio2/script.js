const botao = document.getElementById('calcular');
const texto = document.querySelector('.resultado');

botao.addEventListener('click', (event) => {
    texto.innerText = 'Fui Clicado!';
    console.log('Notas enviadas.');

    console.log(event);
} )