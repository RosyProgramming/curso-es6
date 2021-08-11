// Classes
/*
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


// Const & Let

class TodoList  extends List{
    constructor() {
        super();

        this.usuario ='Rosana';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();
*/
/*9
function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste (10);
*/



// Operações em array 
/*
const arr = [1, 2, 3, 4, 5, 8, 9];
const newArr = arr.map(function(item, index){
    return item  + index;
}); 

console.log(newArr);

const sum = arr.reduce(function(total2, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
*/


// arrow functions
/*
const arr = [1, 2, 3, 4, 5, 8, 9];
const newArr = arr.map(item => item * 2);
console.log(newArr);
*/

//Valores padrão 
/*
function soma(a = 3, b = 9) {
    return a + b;
}
*/
/*
const soma = (a = 3, b =6) => a + b;

console.log(soma(1));
console.log(soma());
*/



// desestruturação
/*
const usuario = {
    nome: 'Rosana',
    idade: 24,
    endereco: {
        cidade: 'Teresina',
        estado: 'PI',
    },
};


console.log(usuario);

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome({ nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);
*/



//Operadores rest/spread

// rest
/*
const usuario = {
    nome: 'Rosana',
    idade: 24,
    empresa: 'WaydenTech'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
*/
// rest com array 
/*
const arr = [1,2,3,4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
*/
/*



// Utilizando o REST para Parâmetro de função 
function soma(a, b, ...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5, 6, 7));




//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Ex2 de SPREAD
const usuario1 = {
    nome:'Rosana',
    idade: 24,
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario1);
console.log(usuario2);

*/


//Template Literals - É uma forma de incluir variaveis dentro de javascript apartir do Es6
/*
const nome = 'Rosana';
const idade =  24;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/


//Object Shorts Syntax 
/*
const nome = 'Rosana';
const idade =  24;

const usuario = {
    nome,
    idade,
    empresa: 'WydenTech',
};

console.log(usuario);
*/

//Configurando webpack
//no terminal instale yarn add webpack webpack-cli -D
// Criar arquivo de configuração webpack.config.js


// import/export

//import { soma, sub } from './funcoes';
//import somaFunction from './soma';
//import { soma as somaFunction, sub } from './funcoes';
//import soma, { sub } from './funcoes';
//import {soma, sub, mult } from './funcoes';
//import * as funcoes from './funcoes'; // chama todas as funções: soma, sub, mult

//console.log(funcoes); // as funções virou objeto
//console.log(funcoes.soma(4, 5));
//console.log(funcoes.sub(8, 5));
//console.log(funcoes.mult(2, 5));
//console.log(somaFunction(4,5));
//console.log(soma(1, 2));
//console.log(sub(1, 2));
//console.log(mult(2,5));

//instalando o webpack dev server
/*
yarn add webpack-dev-server -D

*/
