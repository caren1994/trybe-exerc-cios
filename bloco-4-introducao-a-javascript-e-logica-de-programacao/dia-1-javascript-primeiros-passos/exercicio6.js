let peca = 'REI';
switch (peca.toLowerCase()){
    case 'rei':
        console.log('o rei pode mover para qualquer casa adjacente');
        break;
        case 'bispo':
            console.log('o bispo pode mover por qualquer número de casa');
            break;
            case'rainha':
            console.log('a rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
            break;
            default:
                console.log('erro');
}


