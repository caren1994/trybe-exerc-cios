
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
const pai2=document.body.lastElementChild.previousElementSibling;
const terceiro=document.createElement('section');
terceiro.className='center-content';
pai2.appendChild(terceiro);

// exercicio4
const pai3=document.body.lastElementChild.previousElementSibling.firstElementChild;
const quarto=document.createElement('p');
quarto.innerText='algum texto';
pai3.appendChild(quarto);

// exercicio5

const pai4=section.parentElement;
const quinto=document.creativeElement('section');
quinto.className='left-content ';
pai4.appendChild(quinto);