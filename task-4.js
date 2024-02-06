/**
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


 */

function findAveragePhonePrice(products) {
    let totalPrice = products[0].price;
    for (const product of products) {
        totalPrice = totalPrice + product.price;
    }
    let avgPrice = totalPrice / products.length;
    return avgPrice;

}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95006 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const avgPrice = findAveragePhonePrice(phones);
console.log(avgPrice);