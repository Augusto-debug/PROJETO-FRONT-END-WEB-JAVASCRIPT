window.addEventListener("DOMContentLoaded", () => {
    const maiorValor = (a, b) => a > b ? a : b;
    console.log(maiorValor(10,20));
    console.log(maiorValor(100,2));
    const vet = [10, 5, 78, 21, 33];
    const ref = 15;
    const maioresRef = (vet, ref) =>{
        var vetMaiores = [];
        for(var i = 0; i < vet.length; i++){
            if(vet[i]>= ref){
                vetMaiores.push(vet[i]);
            }
        }
        return vetMaiores;
    }
    const imprimirVet = (vet) => {
        vet.forEach((elemento, index) => console.log(index));
    }
    imprimirVet(maioresRef(vet, ref));
    const dobrar = vet => vet.map(elemento => elemento * 2);
    console.log(dobrar(vet));
    const vetorFiltrado = vet.filter(elemento => elemento >= ref);
    const vetorReduzido = vet.reduce((acc, item) => acc += item, 0);
    console.log(parseInt(vetorReduzido / vet.length).toFixed(0));
})