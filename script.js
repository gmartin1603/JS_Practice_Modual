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

