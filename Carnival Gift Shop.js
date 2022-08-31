const input = require('sync-input');

const gifts = [
    {id: 1, name: 'Teddy Bear', cost: 10},
    {id: 2, name: 'Big Red Ball', cost: 5},
    {id: 3, name: 'Huge Bear', cost: 50},
    {id: 4, name: 'Candy', cost: 8}, 
    {id: 5, name: 'Stuffed Tiger', cost: 15},
    {id: 6, name: 'Stuffed Dragon', cost: 30},
    {id: 7, name: 'Skateboard', cost: 100},
    {id: 8, name: 'Toy Car', cost: 25},
    {id: 9, name: 'Basketball', cost: 20},
    {id: 10, name: 'Scary Mask', cost: 75},  
];

let availableTickets = 0;

function greetingMessage() {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!`);
}

function availableGifts() {
    console.log(`Here's the list of gifts:\n`);
    if (gifts.length === 0) {
        console.log(`Wow! There are no gifts to buy.`);
    } else {
        gifts.forEach(el => console.log(`${el.id}- ${el.name}, Cost: ${el.cost} tickets`));
    }
}

function buyGifts() {
    if (gifts.length === 0) {
        console.log(`Wow! There are no gifts to buy.`);
    } else {
        const giftNumber = Number(input(`Enter the number of the gift you want to get: \n`));
        const index = gifts.findIndex(e => e. id === giftNumber);
        if (isNaN (giftNumber)) {
            console.log(`Please enter a valid number!`);
        } else if (index === -1) {
            console.log(`There is no gift with that number!`);
        } else if (availableTickets < gifts[index].cost) {
            console.log(`You don't have enough tickets to buy this gift.\nTotal tickets: ${availableTickets}`)
        } else {
            availableTickets -= gifts[index].cost;
            console.log(`Here you go, one ${gifts[index].name}!\nTotal tickets: ${availableTickets}`);
            gifts.splice(index, 1);
        }
    }
}

function addTickets() {
    const amount = Number(input(`Enter the ticket amount: \n`));
    if (!(amount >= 0 && amount <= 1000)) {
        console.log(`Please enter a valid number between 0 and 1000.`)
    } else {
        availableTickets += amount;
        console.log(`Total tickets: ${availableTickets}`);
    }
}

function main() {
    greetingMessage();
    availableGifts(); 
    while (true) {
        console.log(`What do you want to do?`);
        const action = input(`1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop: \n`);
        switch (action) {
            case '1':
                buyGifts();
                break; 
            case '2':
                addTickets();
                break;
            case '3':
                console.log(`Total tickets: ${availableTickets}`);
                break;
            case '4':
                availableGifts();
                break;
            case '5':
                console.log(`Have a nice day!`);
                return false;
            default:
                console.log(`Please select one of the possible options!`)
                break;
              }
    } 
}

main(); 
