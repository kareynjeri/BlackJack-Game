/**
 *create a function that logs out "hi there , karey!" when called
 */
// let name = "karey!";
// let greeting = "Hi there ,";

// function greetings() {
//   console.log(greeting + " " + name);
// }
// greetings();

/**
 * create 2 functions ,add3points() and remove1Points()
 * and have them remove points to/from the mypoints variable
 * call the function to log out 10
 */

let mypoints = 3;

function add3points() {
    mypoints += 3;
}

function remove1Points() {
    mypoints -= 1;
}

add3points();

//BLACK JACK GAME
/**
 * 1.create 2 variables , firstcard and secondcard
 * set their values to a random number between 2-11
 * 2. create a variable sum and set it to the sum of the two cards
 */

let firstCard = 43;
let secondCard = 11;
let sumOfCards = firstCard + secondCard;
console.log(sumOfCards);
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardEl = document.getElementById("cards-el");
console.log(messageEl);

function startGame() {
    if (sumOfCards === 21) {
        message = "Wohoo! you have a blackjack🤑";
    } else if (sumOfCards <= 21) {
        message = "Do you want to draw a new card?😵‍💫";
    } else if (sumOfCards >= 21) {
        message = "You are out of the game 🥺";
    }
    messageEl.textContent = message;
    // sumEl.textContent = "Sum:" + sum;
    // cardEl.textContent = "Cards:" + firstCard + " " + secondCard;
}
let newcard = 11;
newcard = newcard + sumOfCards;

function newCard() {
    let newcard = 3;
    newcard = newcard + sumOfCards;
    startGame();
}
console.log(message);