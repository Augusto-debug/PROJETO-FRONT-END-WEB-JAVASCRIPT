let usuarios = [
  { nome: "Ana", idade: 18, sexo: "F", salario: "R$1.000,00" },
  { nome: "João", idade: 20, sexo: "M", salario: "R$3.000,00" },
  { nome: "César", idade: 33, sexo: "M", salario: "R$1.900,00" },
  { nome: "Maria", idade: 12, sexo: "F", salario: "R$7.000,00" },
  { nome: "Zé", idade: 17, sexo: "M", salario: "R$2.400,00" },
];

usuarios.forEach((usuario) => {
  if (usuario.idade >= 18) {
    document.writeln(`<p>Maior de idade: ${usuario.nome} ${usuario.idade}</p>`);
  }
});

usuarios.filter(usuario => usuario.sexo === "M").forEach(usuario => {
  document.writeln(`<p>Homem: ${usuario.nome}</p>`);
});

const pessoaMaiorSalario = usuarios.reduce((maior, atual) => 
  atual.salario > maior.salario ? atual : maior
);
document.writeln(`<p>Pessoa com maior salário: ${pessoaMaiorSalario.nome} - ${pessoaMaiorSalario.salario}</p>`);

const mulheresComAltoSalario = usuarios.some(pessoa => 
  pessoa.sexo === "F" && pessoa.salario > "R$5.000,00"
);
document.writeln(`<p>Há mulher com salário acima de R$5.000,00? ${mulheresComAltoSalario ? "Sim" : "Não"}</p>`);

const mediaSalarioMasculino = usuarios => {
    const converterSalario = s => Number(s.replace("R$", "").replace(/\./g, "").replace(",", "."));
    const homens = usuarios.filter(u => u.sexo === "M");
    const total = homens.reduce((soma, u) => soma + converterSalario(u.salario), 0);
    return (total / homens.length).toFixed(2);
  };
  
  const mediaSalarioFeminino = usuarios => {
    const converterSalario = s => Number(s.replace("R$", "").replace(/\./g, "").replace(",", "."));
    const mulheres = usuarios.filter(u => u.sexo === "F");
    const total = mulheres.reduce((soma, u) => soma + converterSalario(u.salario), 0);
    return (total / mulheres.length).toFixed(2);
  };
  
  document.writeln(`<p>Média salarial masculina: R$${mediaSalarioMasculino(usuarios)}</p>`);
  document.writeln(`<p>Média salarial feminina: R$${mediaSalarioFeminino(usuarios)}</p>`);