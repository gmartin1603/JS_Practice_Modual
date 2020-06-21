ageInDays = () => {
    let date1 = new Date(window.prompt("What is your birthday?"));
    let date2 = new Date;
    let oneDay = 1000*60*60*24
    date1.getTime(date1);
    date1.getTime(date2);
    let age = Math.floor((date2-date1)/oneDay);
    return document.getElementById("age-in-days").innerText = `You are ${age} days old!`;
}

clear = () => {
    document.getElementById("age-in-days").innerText = ''
}

function generateCat() {
    let url = "http://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = url;
    div.appendChild(image)
}

//Challenge 3 Rock Paper Scissors
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = randomChoice();
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    console.log(humanChoice, botChoice, results, message);
}

function randomChoice() {
    let arr = ["rock", "paper", "scissors"]
    let choice = arr[Math.floor(Math.random()*arr.length)];
    return choice;
}

function decideWinner(humanChoice, botChoice) {
    let human = humanChoice;
    let bot = botChoice;
    let winner = ''
    if (human == "rock" && bot == "scissors") {
        winner = "human";
    }
    else if (human == "paper" && bot == "rock") {
        winner = "human";
    }
    else if (human == "scissors" && bot == "paper") {
        winner = "human";
    }
    else if (human === bot) {
        winner = "tie";
    }
    else {
        winner = "bot";
    }
    return winner;
}

function finalMessage(results) {
    let x = results
    if (x==="human") {
        return {"message":"Winner!!", "color":"green"};
    }
    else if (x==="bot") {
        return {"message":"You Loose!", "color":"red"};
    }
    else {
        return {"message":"Tie!", "color":"yellow"};
    }
    
}

function rpsFrontEnd(humanImageChoice,botImageChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    let flex = document.getElementById('flex-box-rps-div');
    while (flex.firstChild) {
        flex.removeChild(flex.firstChild);
    }
    
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src=${imageDatabase[humanImageChoice]} height="150px" width="150px" style='box-shadow: 0px 15px 50px #0033FF'>`;
    botDiv.innerHTML = `<img src=${imageDatabase[botImageChoice]} height="150px" width="150px" style='box-shadow: 0px 15px 50px #FF0000'>`;
    messageDiv.innerHTML = `<h3 style='color:${finalMessage["color"]}; font-size: 60px; padding: 30px'>${finalMessage["message"]}<h3>`
    flex.appendChild(humanDiv);
    flex.appendChild(messageDiv);
    flex.appendChild(botDiv);

}

//Challenge 4: Changing the color of all the buttons.

let allButtons = document.getElementsByTagName("button");
let copyAllButtons = [];

for (let i=0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}
// console.log(copyAllButtons);



function buttonColorChange(option) {
    if (option.value === 'red') {
        buttonsRed();
    }
    else if (option.value ==='green') {
        buttonsGreen();
    }
    else if (option.value === 'yellow') {
        buttonsYellow();
    }
    else if (option.value ==='blue') {
        buttonsBlue();
    }
    else if (option.value === 'random') {
        buttonsRandom();
    }
    else if (option.value ==='reset') {
        buttonsReset();
    }
}

function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonsYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning');
    }
}

function buttonsBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

function buttonsRandom() {
    let randomChoices = ['btn-danger', 'btn-primary', 'btn-warning', 'btn-success']
    
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        let randomChoice = randomChoices[Math.floor(Math.random()*randomChoices.length)]; 
        allButtons[i].classList.add(randomChoice);
    }
}

function buttonsReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

//Challenge 5: BlackJack!


let blackjackGame = {
    'you': {'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
    'cards': ['ac','2c','3c','4c','5c','6c','7c','8c','9c','10c','jc','qc','kc',
            'ad','2d','3d','4d','5d','6d','7d','8d','9d','10d','jd','qd','kd'],
    'cardMap': {'2c':2, '3c':3, '4c':4, '5c':5, '6c':6, '7c':7, '8c':8, '9c':9, '10c':10, 'jc':10, 'qc':10, 'kc':10,
    '2d':2, '3d':3, '4d':4, '5d':5, '6d':6, '7d':7, '8d':8, '9d':9, '10d':10, 'jd':10, 'qd':10, 'kd':10, 'ac':[1, 11], 'ad':[1, 11]}
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio("assets/blackjack_assets/sounds/swish.m4a");
const winSound = new Audio("assets/blackjack_assets/sounds/cash.mp3");
const lossSound = new Audio("assets/blackjack_assets/sounds/aww.mp3");

document.querySelector("#hit-btn").addEventListener("click", dealCards);
document.querySelector("#reset-btn").addEventListener("click", reset);
document.querySelector("#stand-btn").addEventListener("click", dealerTurn);


function dealCards() {
    //returned value of "pickCard()"
    let card = pickCard();
    //Validates value in all caps
    let val = card.toUpperCase();
    showHit(val, YOU);
    tallyScore(card, YOU);
    showScore(YOU)
    console.log(YOU['score']);
    
}

function dealerTurn() {
    stand(DEALER, YOU)
    getWinner(DEALER, YOU)
}

function reset() {
    //resets "you" side
    let yourImage = document.querySelector("#your-box").querySelectorAll('img');
    for (let i = 0; i < yourImage.length; i++) {
        yourImage[i].remove();
    }
    //resets "dealer" side
    let dealerImage = document.querySelector("#dealer-box").querySelectorAll('img');
    for (let i = 0; i < dealerImage.length; i++) {
        dealerImage[i].remove();
    }
    
    YOU['score'] = 0;
    DEALER['score'] = 0;
    
    document.querySelector(YOU['scoreSpan']).textContent = 0;
    document.querySelector(YOU['scoreSpan']).style.color = "white";
    document.querySelector(DEALER['scoreSpan']).textContent = 0;
    document.querySelector(DEALER['scoreSpan']).style.color = "white";
    document.querySelector("#blackjack-result").innerHTML = "Let's Play!"
    document.querySelector("#blackjack-result").style.color = "black"
}

showHit = (card, activePlayer) => {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `assets/blackjack_assets/cards/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage).width = "100";
        hitSound.play();
    }
}

pickCard = () => {
    let randomIndex = Math.floor(Math.random() * 26);
    return blackjackGame['cards'][randomIndex];
}

tallyScore = (card, activePlayer) => {
    if (card === 'ad' || card === 'ac') {
        //if adding 11 keeps score below 21, ace = 11. if 11 will bust, ace = 1
        if (activePlayer['score'] + blackjackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        }else {
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    }
    
    else {
        activePlayer['score'] += blackjackGame['cardMap'][card];
    }  
}

showScore = (activePlayer) => {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

stand = (DEALER, YOU) => {
    if (YOU['score'] <= 21){
        while (DEALER['score'] <= YOU['score'] && DEALER['score'] < 21) {
            //returned value of "pickCard()"
            let card = pickCard();
            //Validates value in all caps
            let val = card.toUpperCase();
            showHit(val, DEALER);
            tallyScore(card, DEALER);
            showScore(DEALER);
            console.log(DEALER['score']);       
        }
    }
    else {
    printWinner(getWinner(DEALER, YOU));

    }
    printWinner(getWinner(DEALER, YOU));
}

getWinner = (DEALER, YOU)=> {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU        
        }
        else if (YOU['score'] < DEALER['score'] && DEALER['score'] <= 21) {
            winner = DEALER;
        }
        else {
            winner = 'none'
        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER
    }
    else {
        winner = "none"
    }
    console.log(DEALER['score'], YOU['score'])
    return winner;
}

printWinner = (winner) => {
    if (winner === YOU) {
        document.querySelector("#blackjack-result").innerHTML = "WINNER!";
        document.querySelector("#blackjack-result").style.color = "green";
        document.querySelector("#wins").innerHTML +=1;
        winSound.play();
    }
    else if (winner === DEALER) {
        document.querySelector("#blackjack-result").innerText = "LOSS!";
        document.querySelector("#blackjack-result").style.color = "red";
        lossSound.play();
        document.querySelector("#losses").innerHTML +=1;    
    }
    else {
        document.querySelector("#blackjack-result").innerText = "TIE"
        document.querySelector("#blackjack-result").style.color = "yellow"
        document.querySelector("#draws").innerHTML +=1;    
    }
}

