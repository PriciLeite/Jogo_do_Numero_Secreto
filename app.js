alert('Bem-vindos ao jogo do número secreto');

// Gerando aleatoriamente o número secreto:
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Exibindo numero secreto no console:
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while o chute for diferente do que o n.S, faça:
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se chute for igual ao número secreto:
    if (chute == numeroSecreto) {
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor do que ' + chute + '!');
        } else {
            alert('O número secreto é maior do que ' + chute + '!');
        }
        tentativas++;
    }
}

// Para caso positivo acertar na primeira tentativa, corrige o plural:
let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai! Você descobriu, o número secreto é ' + numeroSecreto + ' com ' + tentativas + ' ' + numeroTentativas + '!');


/*if (tentativas > 1) {
    alert('Isso ai! Você descobriu, o número secreto é ' + numeroSecreto + ' com ' + tentativas + ' tentativas!');
} else {
    alert('Isso ai! Você descobriu, o número secreto é ' + numeroSecreto + ' com ' + tentativas + ' tentativa!');
}
*/




