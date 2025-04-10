window.addEventListener('DOMContentLoaded', function() {
    let vetor = [11, 20, 33, 40, 50];
    const imprimir = vetor => {
       const sumVetor = vetor.reduce((acc, cur) => acc + cur);
       return sumVetor;
    }
    console.log(imprimir(vetor));

    const parImpar = 
    vetor.forEach(valor => console.log(valor => valor % 2 === 0 ? 'Par' : 'Ímpar'));
});