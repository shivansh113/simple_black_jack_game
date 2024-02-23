let player = {
    name: "Shivansh",
    chips: 200
}

let sum = 0
let cards = []
let hasBlackJack = false;
let isInGame = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL =document.querySelector("#cards-el")
let startbttntext = document.getElementById("game-start-bttn")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randNum = parseInt((Math.random() * 10) + 1)
    let checkForAce = 0
    if (randNum == 1) {
        if ((checkForAce += sum + 11) > 21) {
            return randNum
        } else {
            return 11;
        }
    }
    return randNum
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isInGame = true
    
    renderGame();
}

function renderGame() {
    if (isInGame) {
        startbttntext.textContent = "Restart Game"
    } 
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Hit or hold"
    } else if (sum == 21) {
        message = "Blackjack"
        hasBlackJack = true;
    } else {
        message = "Bust. Best of Luck Next Time"
        isInGame = false
        
    }
    messageEl.textContent = message;
}

function newCardpull() {

    if (isInGame && hasBlackJack === false) {
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
}






