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
//with if statements that ignore the variables that contain 25 or something. Assign the losers'
//values to 25. 
//After each round, reset every player's value to 0? Display all, then after button is pressed to roll,
//redisplay the screen with whatever values have been assigned?
//Each function should have a for loop that loops over how many items are in the list of active players
//and displays them on the screen
//Assign the players that aren't at 25 to a list after each round I think

//I think I can have the same function for each round. Just have it ignore any players value is 25
//Have to have a counter. If less than 4, eliminate two losers, if 4-5, eliminate one
//Display counter as round

//Separate function for the final round? I think so. If statement that tests how many players are left,
//Then run it if only two

//Function to run the game. For each player whose value isn't 25, print them to screen with button
//to roll their dice, then display the sum of their roles. Maybe display each roll and total?


function playGame(array){

    let counter = 1;
    //Test here against rounds, and call finalRound if necessary. Pass in array
    if (counter === 6){
        finalRound(array);
    }
}

function fullRound(array){

    for (let i = 0; i < 6; i++){
        if (array[i] === 25){
            continue;
        }
        else{
            rollDice(array[i])
        }
    }
}

function rollDice(player){


}

function finalRound(array){

}