function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (const day of weekDays) {
      const dayListItem = document.createElement('li');
      dayListItem.innerText= day;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
// exercicio1

  function days(){
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ul=document.getElementById('days');
for(const day of decemberDaysList){
  const li=document.createElement('li');
  li.className='day';
  li.innerText=day;
  if(day===24 || day ===25 || day===31){
    li.classList.add('holiday');
  }
  if(day===4||day===11||day===18||day===25){
    li.classList.add('friday');
}
ul.appendChild(li);
}

}days();

// exercicio2
function holiday(string){
  const botao=document.createElement('button');
  botao.id='btn-holiday';
  botao.innerText=string;
  const div=document.querySelector('.buttons-container');
  div.appendChild(botao);
}holiday('feriados');

// // exercicio3
const botaoFeriado=document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click',mostreDays);
// function mudaCorFeriado(){
// const elementos=document.getElementsByClassName('holiday');
// for (const elemento of elementos){
//   elemento.classList.toggle('cor-fundo');
// }
// }

// exercicio4
function sextaFeira(string){
const botao2=document.createElement('button');
botao2.id='btn-friday';
botao2.innerText=string;
const div=document.querySelector('.buttons-container');
div.appendChild(botao2);
}sextaFeira('sexta-feira');

// exercicio5

const botaoSexta=document.getElementById('btn-friday');//selecionei o botao
botaoSexta.addEventListener('click',mostreDays);
// function mudaTextoSexta(){
// const listaDeFriday=document.getElementsByClassName('friday');
// for (const elemento of listaDeFriday){
//   elemento.classList.toggle('friday-active');
// }
// }

function mostreDays(event){
  const buttons={
    friday:"btn-friday", // ele só existe dentro da função e esse nao é botao é só os possíveis botões para clicar
    holiday:"btn-holiday"
  }
  if(event.target.id==buttons.friday){
    togglesClass("friday","friday-active")
  }else if(event.target.id==buttons.holiday){
    togglesClass("holiday","cor-fundo")
  }
}
function togglesClass(elementoClasse,classeToggle){
  const list=document.getElementsByClassName(elementoClasse);
  for(const day of list){
    day.classList.toggle(classeToggle)
  }
}
// exercicio6

// function zoom (){
// const days=document.getElementsByClassName('day');
// for(const day of days){
// day.addEventListener('mouseover',function(event){ // coloquei o evento como parametro porque previso saber qual das li meu mouse passou por cima.
// event.target.style.fontSize="2rem";

// })
// day.addEventListener("mouseout",function(event){
// event.target.style.fontSize="20px";

// })
// }


// }zoom();

// exercicio7

// exercicio8

// exercicio9

// exercicio10

// exercicio11