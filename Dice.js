"use strict"
let playerOne;
let playerTwo;
let playerThree;
let playerFour;
let playerFive;
let playerSix;
let playerSeven;
let playerEight;
let playerNine;
let playerTen;

//Should allow pure functions because I can edit what I pass in
let playerArray = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen];

//Assign a a number to each for a dice roll for the first function, then write more functions
//with if statements that ignore the variables that contain -1 or something. Assign the losers'
//values to -1. 
//After each round, reset every player's value to 0? Display all, then after button is pressed to roll,
//redisplay the screen with whatever values have been assigned?
//Each function should have a for loop that loops over how many items are in the list of active players
//and displays them on the screen
//Assign the players that aren't at -1 to a list after each round I think

//I think I can have the same function for each round. Just have it ignore any players value is 25
//Have to have a counter. If less than 4, eliminate two losers, if 4-5, eliminate one
//Display counter as round

//Separate function for the final round? I think so. If statement that tests how many players are left,
//Then run it if only two

//Function to run the game. For each player whose value isn't -1, print them to screen with button
//to roll their dice, then display the sum of their roles. Maybe display each roll and total?


function playGame(array){
    //Probably something with a button to start a new game here
    let counter = 1;
    //Test here against rounds, and call finalRound if necessary. Pass in array
    if (counter === 6){
        finalRound(array);
        counter++;
    }
    else{
        if (counter < 7){
            fullRound(array);
            counter++;
        }
        else alert("Game is over!");
    }
}

function fullRound(array){
    //Game should run six of these
    for (let i = 0; i < array.length; i++){
        if (array[i] === -1){
            continue;
        }
        else{
            array[i] = rollDice()
        }
    }
    let playersRemoved = comparePlayers(array);
}

function rollDice(){
    let player = (((Math.random() * 4) + 1) + ((Math.random() * 6) + 1) + ((Math.random() * 8) + 1) + ((Math.random() * 10) + 1) + ((Math.random() * 12) + 1) + ((Math.random() * 20) + 1));
    return player;
}

function finalRound(array){
    //each roll 20 4 times, then roll d4 to determine which of their rolls plays
    array[0] = finalRoundRolls();
    array[1] = finalRoundRolls();
    //Does this function run twice? I want to make sure it doesn't return the same number each time
    if (array[0] === array[1]){
        finalRound(array);
    }
}

//Need a function that will compare all numbers returned and assign the losers the int -1
function comparePlayers(players){
    counter = 0;
    //Maybe want something here about if two players tie, they play directly against each other. But only if they're bottom 2?
    players.sort(function(a, b) {return a-b});
    if (counter < 0 || counter < 4){
        players[(players.length - ((counter * 2) + 1))] = -1;
        players[(players.length - ((counter * 2) + 2))] = -1;
    }
    else if (counter == 4){
        players[(players.length - ((counter * 2) + 1))] = -1;
    }
    else if (counter == 5){
        players[(players.length - (counter * 2))] = -1;
    }
    else {
        players[(players.length - (counter + 1))] = -1;
    }
    counter++;
    return players;
    //Should be fun to test
}

function finalRoundRolls(){
    d20[0] = (Math.random() * 20) + 1;
    d20[1] = (Math.random() * 20) + 1;
    d20[2] = (Math.random() * 20) + 1;
    d20[3] = (Math.random() * 20) + 1;
    //Make sure this is how it should work
    d4 = (Math.random() * 4) + 1;
    return d20[d4];
}