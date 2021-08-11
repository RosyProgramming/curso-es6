//2º exercício 
//A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//2.2 Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);

console.log(rocketseat18);

//2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const google = usuarios.find(usuario => usuario.empresa === "google");
console.log(google);

//2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

  console.log(calculo);