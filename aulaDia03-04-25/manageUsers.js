const showAllUsers = (usuarios) => {
    usuarios.forEach(usuario => {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Cidade: ${usuario.cidade}`);
    });
};

const showUsersGender = (usuarios, gender) => {
    usuarios
        .filter(user => user.sexo == gender)
        .forEach(user => console.log(user.nome));
}

// const manageUsers = {
//     showAllUsers,
//     showUsersGender
// };

export {showAllUsers, showUsersGender};