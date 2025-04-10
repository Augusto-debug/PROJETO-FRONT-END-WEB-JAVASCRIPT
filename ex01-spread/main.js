window.addEventListener('DOMContentLoaded', function() {
    let vet = [10, 20, 30];
    let vet2 = [40, 50, 60];
    let vet3 = [...vet, ...vet2];
    // let a = vet[0];
    // let b = vet[1];
    // let c = vet[2];
    let [a, b, c] = [...vet];
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    console.log(`vet3: ${vet3}`);
    console.log(Math.max(...vet3));
    const user1 = {
        nome:'Lucas',
        idade: 25,
    };
    const user2 = {
        ...user1
    };
    const user3 = {
        ...user1,
        sexo: "M",
    };
    console.log(user3);
    const user4 = {
        ...user1,
        idade: 30,
    };
    console.log(user4);
}); 