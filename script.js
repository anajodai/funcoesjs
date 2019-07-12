// let nome = prompt('Digite seu nome');
// let idade = prompt('Digite sua idade');

//Exemplo 2
// let frase;

// if(idade >=30){
//     frase = 'Seu véio';
//     else {
//         frase = 'Novinho';
//     }
// }


//Laços
// let contador = 1;

// while(contador <= 1000){
//     console.log(contador);
//     contador++;
// }

// //
// do{
//     console.log(contador);
//     contador++;
// } while(contador <=1000);

// //for
// for(let i = 0; i<100; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 100; i+=2){
//     console.log(i);
// }

// let nomes = ['Rafael', 'Leonardo', 'Caroline', 'Ana', 'Gabriela','Você'];

// for(let i = 0; i < 6; i++){
//     console.log(nomes[i]);
// }

// for(let nome of nomes){
//     console.log(nome);
// }

// for(let indice in nomes){
//     console.log(indice);
// }

// Funções
// function falarOi(){
//     alert('oi');
// }

// let falarOi = function(){
//     alert('oi');
// }

// function casa (){
//     let luminaria = 'vermelha';

//     function quarto (){
//         let cama = 'mola';
//         console.log(luminaria);
//     }
// }

// let numero1 = 10;
// let numero2 = 30;

// function escolherMaior(numero1, numero2) {
//     if(numero1 > numero2){
//         maior = numero1
//     }
//         maior = numero2
//         }

    function buscarPalavra(palavraBuscada){
        let palavras = ['computador', 'mouse', 'teclado', 'memoria'];
        for(let palavra of palavras){
            if(palavra === palavraBuscada){
                return true;
            }
        }
        return false;
    }

    