/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 10; 
let isStudent = true; 
let ticketFare = 800; 

if (age < 10) {
    console.log("Children get free ticket");
} else if (isStudent) {
    let price = ticketFare * 0.5;
    console.log("Student ticket fare: " + price + " tk");
} else if (age >= 60) {
    let price = ticketFare * 0.85;
    console.log("Senior citizen ticket fare: " + price + " tk");
} else {
    console.log("Regular ticket fare: " + ticketFare + " tk");
}