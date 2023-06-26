const print = function(firstName) {
    console.log(`Hello ${firstName}`);
}

print("Afton");

const createEmail = function(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    `);
}

createEmail("Afton", 150);