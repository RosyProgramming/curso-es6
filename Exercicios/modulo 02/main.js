/*
1.1
Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
e chame a funão info();
1.2
Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
1.3
Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
para IdadeUsuario.
*/

//1.1
import ClasseUsuario from "./functions";

ClasseUsuario.info();

//1.2
import { idade } from './functions';

console.log(idade);

//1.3
import Usuario, { idade as IdadeUsuario } from "./functions";

console.log(IdadeUsuario);
