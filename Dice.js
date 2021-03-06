"use strict"
var playerOne;
var playerTwo;
var playerThree;
var playerFour;
var playerFive;
var playerSix;
var playerSeven;
var playerEight;
var playerNine;
var playerTen;

var counter;

var playerArray = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen];


function startGame(){
    playerOne = {value: 0, name: "John"};
    playerTwo = {value: 0, name: "David"};
    playerThree = {value: 0, name: "Monty"};
    playerFour = {value: 0, name: "Anakin"};
    playerFive = {value: 0, name: "Han"};
    playerSix = {value: 0, name: "Sheev"};
    playerSeven = {value: 0, name: "JarJar"};
    playerEight = {value: 0, name: "Lancelot"};
    playerNine = {value: 0, name: "Mrs. Doubtfire"};
    playerTen = {value: 0, name: "DeeDee"};

    counter = 0;

    playerArray = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen];

    for (let i = 0; i < playerArray.length; i++){
        playerArray[i].value = rollDice();
        document.getElementById(i).innerHTML = playerArray[i].name;
        document.getElementById(i + "d").innerHTML = playerArray[i].value;
    }
    document.getElementById("rounds").innerHTML = " ";
}

function playRound(){
    if (counter === 5){
        let winner = finalRound(playerArray);
        counter++;
        alert("Game is over! " + winner.name + " won the game with a score of " + winner.value);
    }
    else{
        if (counter < 6){
            fullRound(playerArray);
            counter++;
        }
    }
    let counterInfo;
    if (counter <3){
        counterInfo = "The lowest two will be eliminated!";
    }
    else if (counter < 5 && counter > 2){
        counterInfo = "One player will be eliminated!";
    }
    else{
        counterInfo = "Next is the final round!";
    }
    document.getElementById("rounds").innerHTML = "Round: " + counter +  ". " + counterInfo;
}

function fullRound(array){
    for (let i = 0; i < array.length; i++){
        if (array[i].value === -1){
            document.getElementById(i).innerHTML = " ";
            document.getElementById(i + "d").innerHTML = " ";
        }
        else{
            if (counter > 0){
                array[i].value = rollDice();
            }
            if (array[i].value > 0 && i < 10)
            {
                    document.getElementById(i).innerHTML = array[i].name;
                    document.getElementById(i + "d").innerHTML = array[i].value;
                    comparePlayers(array);
            }
        }
    }
}

function checkDiceRoll(roll){
    if (roll > 0){
        return roll;
    }
}

function rollDice(){
    let player = Math.round((((Math.random() * 4) + 1) + ((Math.random() * 6) + 1) + ((Math.random() * 8) + 1) + ((Math.random() * 10) + 1) + ((Math.random() * 12) + 1) + ((Math.random() * 20) + 1)));
    return player;
}

function finalRound(array){
    array[0].value = finalRoundRolls();
    array[1].value = finalRoundRolls();
    if (array[0].value === array[1].value){
        finalRound(array);
    }
    let winner;
    if (array[0].value > array[1].value){
        winner = array[0];
    }
    else if (array[0].value < array[1].value){
        winner = array[1];
    }
    return winner;
}

function comparePlayers(players){
    players.sort(function(a, b) {return b.value-a.value});
    if (counter > -1 && counter < 3){
        players[(players.length - ((counter * 2) + 1))].value = -1;
        players[(players.length - ((counter * 2) + 2))].value = -1;
    }
    else if (counter == 3){
        players[(players.length - ((counter * 2) + 1))].value = -1;
    }
    else if (counter == 4){
        players[(players.length - (counter * 2))].value = -1;
        document.getElementById(2).innerHTML = " ";
        document.getElementById(2 + "d").innerHTML = " ";
    }
    else {
        players[(players.length - (counter + 1))].value = -1;
    }
    return players;
}

function finalRoundRolls(){
    let firstRand = Math.round(Math.random() * 20);
    let secondRand = Math.round(Math.random() * 20);
    let thirdRand = Math.round(Math.random() * 20);
    let fourthRand = Math.round(Math.random() * 20);
    let d20 = [firstRand, secondRand, thirdRand, fourthRand]
    var d4 = Math.round(Math.random() * 3);
    let final = d20[d4];
    return final;
}