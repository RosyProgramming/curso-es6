/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\nexports.sub = sub;\nexports.mult = mult;\n\nfunction soma(a, b) {\n  //default\n  return a + b;\n}\n\nfunction sub(a, b) {\n  return a - b;\n}\n\nfunction mult(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar funcoes = _interopRequireWildcard(__webpack_require__(/*! ./funcoes */ \"./funcoes.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n// Classes\n\n/*\r\nclass List {\r\n    constructor() {\r\n        this.data = [];\r\n    }\r\n    add(data) {\r\n        this.data.push(data);\r\n        console.log(this.data);\r\n    }\r\n}\r\n\r\n\r\n// Const & Let\r\n\r\nclass TodoList  extends List{\r\n    constructor() {\r\n        super();\r\n\r\n        this.usuario ='Rosana';\r\n    }\r\n\r\n    mostraUsuario() {\r\n        console.log(this.usuario);\r\n    }\r\n}\r\n\r\nconst MinhaLista = new TodoList();\r\n\r\ndocument.getElementById('novotodo').onclick = function() {\r\n    MinhaLista.add('Novo todo');\r\n}\r\n\r\nMinhaLista.mostraUsuario();\r\n*/\n\n/*9\r\nfunction teste(x) {\r\n    let y = 2;\r\n\r\n    if (x > 5) {\r\n        console.log(x, y);\r\n    }\r\n}\r\n\r\nteste (10);\r\n*/\n// Operações em array \n\n/*\r\nconst arr = [1, 2, 3, 4, 5, 8, 9];\r\nconst newArr = arr.map(function(item, index){\r\n    return item  + index;\r\n}); \r\n\r\nconsole.log(newArr);\r\n\r\nconst sum = arr.reduce(function(total2, next) {\r\n    return total + next;\r\n});\r\n\r\nconsole.log(sum);\r\n\r\nconst filter = arr.filter(function(item){\r\n    return item % 2 === 0;\r\n});\r\n\r\nconsole.log(filter);\r\n\r\nconst find = arr.find(function(item){\r\n    return item === 4;\r\n});\r\n\r\nconsole.log(find);\r\n*/\n// arrow functions\n\n/*\r\nconst arr = [1, 2, 3, 4, 5, 8, 9];\r\nconst newArr = arr.map(item => item * 2);\r\nconsole.log(newArr);\r\n*/\n//Valores padrão \n\n/*\r\nfunction soma(a = 3, b = 9) {\r\n    return a + b;\r\n}\r\n*/\n\n/*\r\nconst soma = (a = 3, b =6) => a + b;\r\n\r\nconsole.log(soma(1));\r\nconsole.log(soma());\r\n*/\n// desestruturação\n\n/*\r\nconst usuario = {\r\n    nome: 'Rosana',\r\n    idade: 24,\r\n    endereco: {\r\n        cidade: 'Teresina',\r\n        estado: 'PI',\r\n    },\r\n};\r\n\r\n\r\nconsole.log(usuario);\r\n\r\nconst { nome, idade, endereco: { cidade } } = usuario;\r\n\r\nconsole.log(nome);\r\nconsole.log(idade);\r\nconsole.log(cidade);\r\n\r\n\r\nfunction mostraNome({ nome, idade}) {\r\n    console.log(nome, idade);\r\n}\r\n\r\nmostraNome(usuario);\r\n*/\n//Operadores rest/spread\n// rest\n\n/*\r\nconst usuario = {\r\n    nome: 'Rosana',\r\n    idade: 24,\r\n    empresa: 'WaydenTech'\r\n}\r\n\r\nconst { nome, ...resto } = usuario;\r\n\r\nconsole.log(nome);\r\nconsole.log(resto);\r\n*/\n// rest com array \n\n/*\r\nconst arr = [1,2,3,4];\r\n\r\nconst [ a, b, ...c] = arr;\r\n\r\nconsole.log(a);\r\nconsole.log(b);\r\nconsole.log(c);\r\n*/\n\n/*\r\n\r\n\r\n\r\n// Utilizando o REST para Parâmetro de função \r\nfunction soma(a, b, ...params) {\r\n    return params.reduce((total, next) => total + next);\r\n}\r\n\r\nconsole.log(soma(1, 3, 4, 5, 6, 7));\r\n\r\n\r\n\r\n\r\n//SPREAD\r\n\r\nconst arr1 = [1, 2, 3];\r\nconst arr2 = [4, 5, 6];\r\nconst arr3 = [ ...arr1, ...arr2];\r\n\r\nconsole.log(arr1);\r\nconsole.log(arr2);\r\nconsole.log(arr3);\r\n\r\n// Ex2 de SPREAD\r\nconst usuario1 = {\r\n    nome:'Rosana',\r\n    idade: 24,\r\n};\r\n\r\nconst usuario2 = { ...usuario1, nome: 'Gabriel' };\r\n\r\nconsole.log(usuario1);\r\nconsole.log(usuario2);\r\n\r\n*/\n//Template Literals - É uma forma de incluir variaveis dentro de javascript apartir do Es6\n\n/*\r\nconst nome = 'Rosana';\r\nconst idade =  24;\r\n\r\n// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos.`);\r\n*/\n//Object Shorts Syntax \n\n/*\r\nconst nome = 'Rosana';\r\nconst idade =  24;\r\n\r\nconst usuario = {\r\n    nome,\r\n    idade,\r\n    empresa: 'WydenTech',\r\n};\r\n\r\nconsole.log(usuario);\r\n*/\n//Configurando webpack\n//no terminal instale yarn add webpack webpack-cli -D\n// Criar arquivo de configuração webpack.config.js\n// import/export\n//import { soma, sub } from './funcoes';\n//import somaFunction from './soma';\n//import { soma as somaFunction, sub } from './funcoes';\n//import soma, { sub } from './funcoes';\n//import {soma, sub, mult } from './funcoes';\n// chama todas as funções: soma, sub, mult\nconsole.log(funcoes); // as funções virou objeto\n\nconsole.log(funcoes.soma(4, 5));\nconsole.log(funcoes.sub(8, 5));\nconsole.log(funcoes.mult(2, 5)); //console.log(somaFunction(4,5));\n//console.log(soma(1, 2));\n//console.log(sub(1, 2));\n//console.log(mult(2,5));\n//instalando o webpack dev server\n\n/*\r\n\r\n*/\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });