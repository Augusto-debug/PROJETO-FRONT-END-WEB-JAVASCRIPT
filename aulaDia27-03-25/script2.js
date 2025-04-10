window.addEventListener("DOMContentLoaded", () => {
  let usuarios = [
    { nome: "Ana", idade: 18, genero: "F", salario: 1000.0 },
    { nome: "João", idade: 20, genero: "M", salario: 3000.0 },
    { nome: "Cesar", idade: 33, genero: "M", salario: 1900.0 },
    { nome: "Maria", idade: 12, genero: "F", salario: 7000.0 },
    { nome: "Ze", idade: 17, genero: "M", salario: 2400.0 },
  ];

  const maioresIdade = usuarios.filter((usuario) => usuario.idade >= 18).forEach((usuario) => {
    console.log(`O nome das pessoas maiores de idade é ` + usuario.nome + " e a idade é " + usuario.idade);
  });
  const masculinos = usuarios.filter((usuario) => usuario.genero === "M").forEach((usuario) => {
    console.log(`O nome das pessoas do genero masculino é ` + usuario.nome);
  });
  const maiorSalario = usuarios.reduce((acc, usuario) => {
    return acc.salario > usuario.salario ? acc : usuario;
  }, usuarios[0]);
console.log(`o nome da pessoa com maior salario é ` + maiorSalario.nome + " e o salario é " + maiorSalario.salario + " a idade é " + maiorSalario.idade + " e o genero é " + maiorSalario.genero);
  const mulherAcima5000 = usuarios.some(
    (usuario) => usuario.salario > 5000 && usuario.genero === "F"
  );
  console.log(mulherAcima5000);

  console.log(mulherAcima5000);
  const mediaSalariosHomens = usuarios
    .filter((usuario) => usuario.genero === "M")
    .reduce((acc, usuario) => acc + usuario.salario, 0);
  console.log(mediaSalariosHomens / usuarios.filter((usuario) => usuario.genero === "M").length);

  const mediaSalariosMulheres = usuarios
    .filter((usuario) => usuario.genero === "F")
    .reduce((acc, usuario) => acc + usuario.salario, 0);
  console.log(mediaSalariosMulheres / usuarios.filter((usuario) => usuario.genero === "F").length);
});
