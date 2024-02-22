let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false;
let isInGame = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL =document.querySelector("#cards-el")

function getRandomCard() {
    randNum = parseInt((Math.random() * 9) + 1)
    let checkForAce = 0
    if (randNum == 1) {
        if ((checkForAce += sum + randNum) > 21) {
            return randNum
        } else {
            return 11;
        }
    }
    return randNum
}

function startGame() {
    renderGame();
}

function renderGame() {
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
        message = "Bust"
        isInGame = false;
    }
    messageEl.textContent = message;
}

function newCardpull() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function aceCardFound() {

}

