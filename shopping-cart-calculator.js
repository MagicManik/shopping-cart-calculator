const products = [
    { name: 'shirt', price: 100, quantity: 5 },
    { name: 'computer', price: 100, quantity: 1 },
    { name: 'mobile', price: 100, quantity: 1 },
    { name: 't-shart', price: 100, quantity: 5 }
];

let totalPrice = 0;
for (let element of products) {
    let productsPrice = element.price * element.quantity;
    totalPrice = totalPrice + productsPrice;
}
console.log(totalPrice);