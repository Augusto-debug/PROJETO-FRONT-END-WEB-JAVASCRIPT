window.addEventListener('DOMContentLoaded', function() {
    const vet = [10, 20, 30];
    const [a, b, c] = vet;
    const usuario = {
        nome: 'Lucas',
        idade: 25,
        cidade: 'São Paulo'
    };
    const { nome: nomeUser, idade, cidade } = usuario;
    console.log(nomeUser);
    const {nome, ...newUserWithoutNome} = usuario;
    console.log(newUserWithoutNome);
});