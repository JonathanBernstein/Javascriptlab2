"use strict";
let userHealth = 40;
let grantHealth = 10;
let userwins = 0;
let grantwins = 0;
let name = undefined;
startGame();

function startGame() {
    let choice = prompt("Do you want to play");

    if (choice === "yes") {

        name = prompt("What is your name?");

        startCombat();

    } else {
        console.log("Goodbye!");
    }

}

function startCombat() {
    while (grantwins < 1 && userwins < 3) {

        if (grantHealth > 0 && userHealth > 0) {

            userHealth = (userHealth - getDamage());
    
            console.log(`Grant has ${grantHealth} health left`);
            console.log(`${name} has ${userHealth} health left`);

            let attack = prompt("Would you like to attack or quit?");

            if (attack === "attack") {

                grantHealth = (grantHealth - getDamage());

            } else if (attack === "quit") {
                console.log("Goodbye!");
                return;

            }

        } if (grantHealth <= 0) {
            console.log(`${name} has won this battle!`)
            userwins++;
            grantHealth = 10;


        } else if (userHealth <= 0) {
            grantwins++;
            console.log(`${name} has been defeated by Grant! ${name} is a loser!`);
            break;

        } if (userwins === 3) {
            console.log(`${name} Won! ${name} defeated the mighty Grant!`);
            break;
        }

    }
}
function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}
