document.getElementById('tagp').innerText='me vejo empregada';

document.getElementsByClassName('main-content')[0].style.backgroundColor="rgb(76,164,109)";

document.getElementsByClassName('center-content')[0].style.backgroundColor="white";

document.getElementsByTagName('h1')[0].innerText='Exercício 5.1 - JavaScripit';

let pp=document.getElementsByTagName('p');
for(paragrafo of pp){
paragrafo.style.textTransform = 'uppercase';
}


function exercicio6(){
    const titulos=document.getElementsByTagName('p');
        for(p of titulos)
            console.log(p.innerText);
        
          
    }exercicio6()

// para mostrar no console do browser coloca console.log(exercicio6(p.innerText));