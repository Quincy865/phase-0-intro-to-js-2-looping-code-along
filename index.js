function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

const names = ["Quincy", "Bob", "Sean"];
const event = "birthday";
const thankYouCards = writeCards(names, event);
console.log(thankYouCards);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}


countDown(5);