
// exercício1
const pai1=document.body;
const primeiro=document.createElement('h1');
primeiro.innerText='Exercício 5.2 - JavaScript DOM';
pai1.appendChild(primeiro);

// exercício2
const segundo=document.createElement('main');
segundo.className='main-content';
pai1.appendChild(segundo);

// exercício3
const terceiro=document.createElement('section');
const pai2=document.body.lastElementChild;
terceiro.className='center-content';
console.log(terceiro);
pai2.appendChild(terceiro);


// exercicio4

const pai3=document.body.lastElementChild;
const quarto=document.createElement('p');
quarto.innerText='algum texto';
pai3.appendChild(quarto);

// exercicio5
const quinto=document.createElement('section');
quinto.className='left-content';
pai2.appendChild(quinto);

// exercicio6
const sexto=document.createElement('section');
sexto.className='right-content';
pai2.appendChild(sexto);

// exercicio7
const pai4=document.getElementClassName('left-content');
const setimo=document.createElement('img src=https://picsum.photos/200');
setimo.className='small-image';
pai4.appendChild(setimo);
