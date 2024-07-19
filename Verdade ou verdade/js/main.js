

var tempUser = [];
var tempAge = [];
var formRegisterPlayer = document.getElementById('formMain');
var iUser = 0;
//Função para adicionar jogador
formRegisterPlayer.addEventListener('submit', function(e){
    e.preventDefault();
    var userPlayer = document.getElementById('userName').value;
    var userAge = document.getElementById('userAge').value;

    tempUser.push(userPlayer);
    tempAge.push(userAge);

    alert(`Jogador ${userPlayer} cadastrado com sucesso!`);
    iUser++;
});
//função para definir o round e o jogador ativo

var round = 0;
var nowUser = tempUser[0];
let i = 0;
//Botão de Jogar
var gameButton = document.getElementById('gameButton');
    gameButton.addEventListener('click', function(e){
        e.preventDefault();    
        round = round + 1;
        var totalUsers = tempUser.length;
        nowUser = tempUser[i];
        var lasttod = tod;
        var tod = Math.floor(Math.random() * 2) + 1;
        while(lasttod == tod){
            tod = Math.floor(Math.random() * 2) + 1;
        }
        var gameShow = document.getElementById('gameShow');
        var modalGameShow = document.getElementById('modalGameShow');
        var modalGameTitle = document.getElementById('modalGameTitle');
        var modalGameClose = document.getElementById('modalGameClose');
        const modalGame = new bootstrap.Modal('#modalGame');
    setTimeout(()=>{
        switch(tod){
            case 1:
                modalGameTitle.innerHTML = 'Verdade: '
                modalGameShow.innerHTML = `
                <div class=" justify-content-center">
                    <p>${todGameItensTruth()}</p>
                </div>`;
                modalGame.show();
                modalGameClose.addEventListener('click', function(){
                    modalGame.hide();
                });
                break;
            case 2:
                modalGameTitle.innerHTML = 'Desafio: '
                modalGameShow.innerHTML = `
                <div class=" justify-content-center">
                    <p>${todGameItensDare()}</p>
                </div>`;
                modalGame.show();
                modalGameClose.addEventListener('click', function(){
                    modalGame.hide();
                });
                break;
            default:
                gameShow.innerHTML = 'Não foi possivel escolher um novo round';
        }
        i = i+1;
        }, 140);
    });

    var gameButtonAgain = document.getElementById('gameButtonAgain');
    gameButtonAgain.addEventListener('click', function(e){
        e.preventDefault();
        round = round + 1;
        var totalUsers = tempUser.length;
        nowUser = tempUser[i];
        var lasttod = tod;
        var tod = Math.floor(Math.random() * 2) + 1;
        while(lasttod == tod){
            tod = Math.floor(Math.random() * 2) + 1;
        }
        var gameShow = document.getElementById('gameShow');
        var modalGameShow = document.getElementById('modalGameShow');
        var modalGameTitle = document.getElementById('modalGameTitle');
    setTimeout(()=>{
        switch(tod){
            case 1:
                modalGameTitle.innerHTML = 'Verdade: '
                modalGameShow.innerHTML = `
                <div class=" justify-content-center">
                    <p>${todGameItensTruth()}</p>
                </div>`;
                modalGameClose.addEventListener('click', function(){
                    modalGame.hide();
                });
                break;
            case 2:
                modalGameTitle.innerHTML = 'Desafio: '
                modalGameShow.innerHTML = `
                <div class=" justify-content-center">
                    <p>${todGameItensDare()}</p>
                </div>`;
                modalGameClose.addEventListener('click', function(){
                    modalGame.hide();
                });
                break;
            default:
                gameShow.innerHTML = 'Não foi possivel escolher um novo round';
        }
        i = i+1;
        }, 240);
    });

//função para randomizar uma pergunta e retornar ela
function todGameItensTruth(){
    var truth = [
        'É verdade que você já precisou fazer uma gambiarra para que seu veículo voltasse a funcionar? se sim, qual? e funcionou?',
        'É verdade que você já deixou de pagar por um doce pois achou que estava muito caro? se sim, qual?',
        'É verdade que você já influenciou alguém ou foi influenciado a fugir da escola?',
        'É verdade que você já saiu sem roupas intimas para alguma festa?',
        'É verdade que você não sabe fazer trabalhos domesticos sozinho?',
        //a partir daqui apenas maiores de 18, aqueles que pagaram o plano
    ];
    var truthSelector = Math.floor(Math.random() * truth.length);
    var returnTruth = truth[truthSelector] 
    return returnTruth; 
}
//função para randomizar um desafio e retornar ele
function todGameItensDare(){
    let randUser = Math.floor(Math.random() * tempUser.length);
    while(randUser == nowUser){
        randUser = Math.floor(Math.random() * tempUser.length);
    }
    let dare = [
        'Eu te desafio a comer um aro de cebola cru',
        'Te desafio a falar para seus pais, com uma expressão séria, que você quer raspar o cabelo',
        'Te desafio a ligar para o namorado(a) do(a) ' + tempUser[randUser] + ' e falar que sempre gostou dele(a)',
        'Eu te desafio a fazer 10 agachamentos [sem camisa]',//se idade menor que 18, a opção "sem camisa não aparecerá"
        'Te desafio a falar a maior palavra do mundo sem gaguejar',
        //a partir daqui apenas maiores de 18, aqueles que pagaram o plano
        'Te desafio a tirar uma peça de roupa e entregá-la para o(a)' + tempUser[randUser] + ' só podendo vesti-la quando o(a) ' + tempUser[randUser] + ' permitir',
        'Te desafio a fazer um ASMR de namorado(a) sexy durante 30 segundos, cronometrados',
        'Eu te desafio a enviar um screenshot da sua galeria, e, se houverem nudes entre as 10 primeiras fotos, envie para o(a) ' + nowUser,
        'Te desafio a encenar todo seu processo de masturbação para grupo',
        'Eu te desafio a mandar uma foto da sua roupa intima para algum jogador secreto',
        'Te desafio a encenar todo seu processo de masturbação apenas para ' + tempUser[randUser]
    ];
    let dareSelector = Math.floor(Math.random() * dare.length);
    return dare[dareSelector];
}