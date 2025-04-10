window.addEventListener('DOMContentLoaded', function() {
    // function showMsg() {
    //     alert('Hello, World!');
    // }
    // showMsg();

    const soma = (a, b) => a + b;
    console.log(soma(2, 3));

    // const exibir = parametro => alert(parametro);
    // exibir('Hello, World!');

    const idades = [10, 20, 30, 40, 50];
    const mediaSimples = vetor => {
        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i];
        }
        return soma / vetor.length;
    }
    console.log(mediaSimples(idades));

    const maiorIdade = vetor => {
        let control = vetor[0];
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > control) {
                control = vetor[i];
            }
        }
        return control;
    };
    console.log(maiorIdade(idades));
    
});