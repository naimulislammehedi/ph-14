// Multi Level Condition 

const price = 5000; 

if (price >= 4000) {
    const discount = price * 10 / 100;
    console.log(`You got a discount of ${discount} and you have to pay ${price - discount}`);
} else if (price > 2500) {
    const discount = price * 5 / 100;
    console.log(`You got a discount of ${discount} and you have to pay ${price - discount}`);
}
else {
    console.log(`You have to pay ${price}`);
}