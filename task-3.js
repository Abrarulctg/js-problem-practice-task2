/**
 * Your task is to calculate the total budget required to buy electronics:
 * laptop = 35000 tk
 * tablet = 15000 tk
 * mobile = 20000 tk
 * 
 * Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 * 
 */


function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice * laptopQty;
    const tabletTotalPrice = tabletPrice * tabletQty;
    const mobileTotalPrice = mobilePrice * mobileQty;

    const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalPrice;
}


const totalBudget = calculateElectronicsBudget(3, 5, 4);
console.log(totalBudget);