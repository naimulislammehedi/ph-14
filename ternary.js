// Ternary 

const age = 12; 

const canDrive = age >= 16 ? 'Yes' : 'No';

console.log(canDrive); // Output: No


let price = 500; 
const isLeader = true; 

if (isLeader) {
  price *= 0.9; // Apply a 10% discount for leaders
} else {
  price *= 1.05; // Apply a 5% increase for non-leaders
}
console.log(price); // Output: 450

price = isLeader ? price * 0.9 : price * 1.05; // Using ternary operator for the same logic
console.log(price); // Output: 405


if (isLeader === true) {
    if(price > 1000) {
        price = price / 2; 
    } else {
        price = 0; 
    }
} else {
    price = price * 1.05;
}

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price * 1.05; // Using nested ternary operator for the same logic
console.log(price); // Output: 0