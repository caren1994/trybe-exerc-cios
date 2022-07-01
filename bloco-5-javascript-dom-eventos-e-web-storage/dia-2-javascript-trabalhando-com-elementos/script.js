
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
terceiro.parentElement.style.backgroundColor='green';


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
sexto.style.marginRight='auto';

// // exercicio7
const pai4=document.querySelector('.left-content');
const setimo=document.createElement('img');
setimo.setAttribute('src','https://picsum.photos/200');
setimo.className='small-image';
pai4.appendChild(setimo);


// exercicio8
const pai5=document.querySelector('.right-content');
const oitavo=document.createElement('ul');
pai5.appendChild(oitavo);
const array=['um','dois','tês','quatro','cinco','seis','sete','oito','nove','dez'];
for(const number of array){
    const li=document.createElement('li');
    li.innerText=number;
oitavo.appendChild(li); 
}

// exercicio9
for (let index=0;index<3;index+=1){
    const tagh3=document.createElement('h3');
    tagh3.innerText='h3';
    tagh3.className='description';
    pai2.appendChild(tagh3);
}
// exercicio10
primeiro.className='title';

pai2.removeChild(quinto);
terceiro.parentElement.style.backgroundColor='green';


// const ultimape=document.
// oitavo.removeChild();
(oitavo.lastChild.remove());
(oitavo.lastChild.remove());

