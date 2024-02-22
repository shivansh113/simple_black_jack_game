let firstCard = 12
let secondCard = 12

let sum = firstCard + secondCard
let hasBlackJack = false;
let isInGame = true
let message = ""


function startGame() {

    if (sum < 21) {
        message = "Hit or hold"
    } else if (sum == 21) {
        message = "Blackjack"
        hasBlackJack = true;
    } else {
        message = "Bust"
        isInGame = false;
    }

}