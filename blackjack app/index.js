// let firstCard = 4;
// let secondCard = 100;

// let sum = firstCard + secondCard;

// if (sum < 21) {
//     console.log('Draw a new card? :) ')
// } else if (sum === 21) {
//     console.log("You have blackjack! :D ")
// } else {
//     console.log('you\'ve lost! :\'(')
// };




// let message = '';
// let sum = 0;
// let cards = [];
// let hasBlackJack = false;
// let isAlive = false;
// let messageEl = document.getElementById('message-el');
// let sumEl = document.querySelector('.sum-el');
// let cardsEl = document.querySelector('#cards-el');



// let player = {
//     name: "Samy",
//     chips: 150
// };

// let playerEl = document.querySelector('#player-el');

// playerEl.textContent = player.name + ": $" + player.chips;




// function getRandomCard (){
// let randomNumber = Math.floor(Math.random()*13) + 1;
//     if(randomNumber > 10){
//         return 10
//     } else if (randomNumber === 1){
//         return 11
//     } else {
//         return randomNumber
//     }
// };


// console.log(cards)



// function startGame(){
//     isAlive = true;
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [
//         firstCard,
//         secondCard
//     ];
//     sum = firstCard + secondCard;
//     renderGame();
// };

// function renderGame (){
//     cardsEl.textContent = "Cards: "
//     for(i = 0; i < cards.length; i++){
//         cardsEl.textContent +=  cards[i] + " "
//     }

//     sumEl.textContent = "Sum: " + sum;
//     if (sum <= 20){
//         message = 'Draw a new card?';
//     } else if (sum === 21){
//         message = 'Blackjack!';
//         hasBlackJack = true;
//     } else {
//         message = "You lose"
//         isAlive = false;

//     }

//     messageEl.textContent = message;
// };

// function newCard(){
//     if (isAlive === true && hasBlackJack === false){
//         let newCard = getRandomCard();
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     }
// }; 








// Arrays practice 
// arrays are ordered lists of items







// let experience = [
// "ceo at scrimble", 
// "Frontend developer",
// "people counter"
// ];

// console.log(experience.length)

// let samy = [
// "Samy Taha", 
// 28, 
// true];

// console.log(samy)

// let cards = [7, 4];

// cards.push(3);

// console.log(cards);

// let messages = [
//     "hey, how's it going?",
//     "i'm great, thank you! how about you?",
//     "All good, been working on my portfolio lately."
// ];

// let newMessage = "Same here!";

// messages.push(newMessage);

// console.log(messages);

// messages.pop();
// messages.pop();
// messages.pop();

// console.log(messages);

// let sentence = [
//     "hello,",
//     "my",
//     "name",
//     "is",
//     "samy"
// ]
//  let greetingEl = document.getElementById('greeting-el');

//  for (i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " " 
//     }


// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime(){
//     if(player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function totalTime (){
//     return player1Time + player2Time
// };

// let totalRaceTime = totalTime()
// console.log(totalRaceTime)


let fruit = [
    "apple",
    "orange", 
    "apple",
    "apple",
    "orange"
]

let appleShelf = document.querySelector('#apple-shelf')
let orangeShelf = document.querySelector("#orange-shelf")

function shelfStack(){
    for(i=0; i < fruit.length; i++){
        if(fruit[i] === "apple"){
            appleShelf.textContent += "apple" + " "
        } else if (fruit[i]=== "orange") {
            orangeShelf.textContent += "orange" + "  "
        }
    }
}

shelfStack()