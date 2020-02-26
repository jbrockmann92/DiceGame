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
//Probably better to make these 2d arrays that have names. That way, if I eliminate one, the name stays with the player

var counter;

//Should allow pure functions because I can edit what I pass in
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
    playerNine = {value: 0, name: "MrsDoubtfire"};
    playerTen = {value: 0, name: "DeeDee"};

    counter = 0;

    playerArray = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen];
}

function playRound(){
    if (counter === 5){
        let winner = finalRound(playerArray);
        counter++;
        alert("Game is over!" + winner.name + " won the game with a score of " + winner.value);
    }
    else{
        if (counter < 6){
            fullRound(playerArray);
            counter++;
        }
    }
    document.getElementById("rounds").innerHTML = "Round: " + counter;
}

function fullRound(array){
    for (let i = 0; i < array.length; i++){
        if (array[i].value === -1){
            document.getElementById(i).innerHTML = " ";
            //.value might not be right there??
        }
        else{
            array[i].value = rollDice();
            console.log(array[i]);
            //For loop that runs 10 times and goes through 10 divs in the html file?
            if (array[i].value > 0 && i < 10)
            {
                    document.getElementById(i).innerHTML = array[i].name + "'s score is " + array[i].value;
            }
            //Should work eh?
            //Write function that takes in array[i] and returns it if it's not -1, but returns something like "player is out" if it is

            //This returns the numbers I want one by one, but each time it ends up overwriting the old one. How to print each one in a new place?
            //How do I progress through each of the players who is still in and print the number returned to their section?
        }
    }
    let playersRemoved = comparePlayers(array);
}

function checkDiceRoll(roll){
    //Might not need to use this at all??
    if (roll > 0){
        return roll;
    }
}

function rollDice(){
    let player = Math.round((((Math.random() * 4) + 1) + ((Math.random() * 6) + 1) + ((Math.random() * 8) + 1) + ((Math.random() * 10) + 1) + ((Math.random() * 12) + 1) + ((Math.random() * 20) + 1)));
    //This is printing the one item to the page. Probably have to put somewhere else so it can print all of the numbers 
    return player;
}

function finalRound(array){
    //each roll 20 4 times, then roll d4 to determine which of their rolls plays
    array[0].value = finalRoundRolls();
    array[1].value = finalRoundRolls();
    //Does this function run twice? I want to make sure it doesn't return the same number each time
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

//Need a function that will compare all numbers returned and assign the losers the int -1
function comparePlayers(players){
    //Maybe want something here about if two players tie, they play directly against each other. But only if they're bottom 2?
    players.sort(function(a, b) {return b.value-a.value});
    //This might throw a wrench in things with the 2d array
    if (counter > -1 && counter < 3){
        players[(players.length - ((counter * 2) + 1))].value = -1;
        players[(players.length - ((counter * 2) + 2))].value = -1;
    }
    else if (counter == 3){
        players[(players.length - ((counter * 2) + 1))].value = -1;
    }
    else if (counter == 4){
        players[(players.length - (counter * 2))].value = -1;
    }
    else {
        players[(players.length - (counter + 1))].value = -1;
    }
    //Separate counter here to keep functions pure. Is this best practice?
    return players;
    //Should be fun to test
}

function finalRoundRolls(){
    let firstRand = Math.round((Math.random() * 20) + 1);
    let secondRand = Math.round((Math.random() * 20) + 1);
    let thirdRand = Math.round((Math.random() * 20) + 1);
    let fourthRand = Math.round((Math.random() * 20) + 1);
    let d20 = [firstRand, secondRand, thirdRand, fourthRand]
    //Make sure this is how it should work
    var d4 = Math.round((Math.random() * 4) + 1);
    let final = d20[d4];
    return final;
}