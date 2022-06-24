
// / Nosso desafio
// Você deve criar um sistema que permita o cadastro de novos usuários nos sistemas da empresa.
// ,gerar senhas para todos os novos usuários.
// Inserir os novos usuários nos sistemas da empresa.
let novosUsuarios = [
    'Marcos',
    'Camila',
    'Adriana',
    'Karla',
    'José',
    'Márcia',
    'Michelle',
    'Michel',
  ];

let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];

// Requisitos
// 1 - O sistema deve fazer um controle de acesso e só liberar a execução das atividades 
//se a pessoa usuária fizer login no sistema 
//e tiver acesso liberado para realizar essas operações (Login: 'usuarioTrybe' com a senha: 'trybe2022');
// Se a pessoa usuária tiver acesso o sistema deve imprimir a mensagem "Acesso permitido!", 
//caso contrário a mensagem exibida será "Acesso negado!"


let login='usuarioTrybe';
let senha='trybe2022';
let temAcesso=false;
if(login ==='usuarioTrybe' && senha ==='trybe2022'){
    console.log('acesso permitido');
    temAcesso=true;
}else{
    console.log('acesso negado');
}

// 2 - O sistema deve criar senhas iniciais aleatórias para os novos usuários no padrão "nome" + "_" + numero aleatório 
// vezes o ano de 2022
// Obs. A operação só deve ser realizada se a pessoa usuária tiver acesso a ela!

if(temAcesso===true){
    console.log('---acesso a troca de senhas---')
for(let index=0;index<novosUsuarios.length;index+=1){
    let novaSenha=novosUsuarios[index]+'_'+Math.floor(Math.random() * 2022);
    console.log(novaSenha);
}
}else{
    console.log('você não tem acesso para realizar essa operação');
}
// 3 - Inserir os novos usuários nos sistemas da empresa (Criar uma lista do sistema e o nome dos usuários cadastrados)
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
// let novosUsuarios = [
//     'Marcos',
//     'Camila',
//     'Adriana',
//     'Karla',
//     'José',
//     'Márcia',
//     'Michelle',
//     'Michel',
//   ];

// let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];


if(temAcesso===true){
    for(let index1=0;index1<sistemas.length;index1+=1){
        console.log('sistemas:', sistemas [index1])
        console.log('usuarios:')
     for(let index2=0;index2<novosUsuarios.length;index2+=1){
console.log(index2 + novosUsuarios[index2] )
     }
    }
}else{
    console.log("voce não tem acesso");
}
// 4 - O sistema deve permitir a exclusão de um usuário da lista sempre que for necessário
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
// Pesquisar: remover elemento de um array javascript no Google
let usuarioParaExcluir='Adriana'
if (temAcesso===true){
for(let index3=0;index3<novosUsuarios.length;index3+=1){
    if(novosUsuarios[index3]==usuarioParaExcluir){
        novosUsuarios.splice(index3,1);
    }else{
        console.log('voce nao tem acesso');
    }
}
}
console.log(novosUsuarios);
