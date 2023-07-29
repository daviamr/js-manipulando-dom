const robotron = document.getElementById('robotron');
robotron.addEventListener('click', (evento) => {
    console.log('Olá, humano.\nBem-vindo ao projeto Robotron 2023!');
    console.log(evento);
})

const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const braco = document.getElementById('braco');

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach( (elemento)=> {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    })
})

//

function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}
// Alterando vários componentes