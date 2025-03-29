window.addEventListener("DOMContentLoaded", () => {
    const idades = [17, 20, 31, 40, 50, 63, 70, 85, 90, 100];
    const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
    const maiorIdade = () => {
        let maior = idades[0];
        for (let i = 1; i < idades.length; i++) {
            if (idades[i] > maior) {
                maior = idades[i];
            }
        }
        return maior;
    };
    document.writeln(`<p>A soma das idades é: ${somaIdades}</p>`);
    document.writeln(`<p>A média das idades é: ${somaIdades / idades.length}</p>`);
    document.writeln(`<p>A maior idade é ${maiorIdade()}</p>`);
    document.writeln(`<p>As idades impares são ${idades.map((idade) => {
        if (idade % 2 !== 0) {
            return idade;
        }
    })}</p>`);
    document.writeln(`As idades maiores de 18 anos são ${idades.filter((idade) => {
        if (idade >= 18) {
            return idade;
        }
    })}`);
    let idadeDigitada = parseInt(prompt("Digite uma idade: "));
    const todasMaioresOuIguais = idades.every(idade => idade >= idadeDigitada);
    const maioresOuIguais = idades.filter(idade => idade >= idadeDigitada);
    const mediaIdadesDigitadas = maioresOuIguais.reduce((acc, idade) => acc + idade, 0) / maioresOuIguais.length;
    document.writeln(`<p>São todas maiores do que a idade digitada ? ${todasMaioresOuIguais}</p>`);
    document.writeln(`<p>As idades iguais ou maiores são ${maioresOuIguais}</p>`);
    document.writeln(`<p>A média das idades iguais ou maiores é ${mediaIdadesDigitadas}</p>`);
});