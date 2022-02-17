// get input function
function getInput(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputText = inputValue.value;
    const inputNumber = parseFloat(inputText);
    // inputValue.value = '';
    return inputNumber;
}

// sum of all value
function addValue(firstNum, secondNum, thirdNum) {
    const sum = firstNum + secondNum + thirdNum;
    document.getElementById('total-expenses').innerText = sum;
    return sum;
}

// subtract value
function subtractValue(firstValue, secondValue, balanceId) {
    const substract = firstValue - secondValue;
    document.getElementById(balanceId).innerText = substract;
    return substract;
}

// save money in percent
function saveMoney(income, saveValue) {
    const save = saveValue / 100;
    const saveAmount = income * save;
    document.getElementById('saving-amount').innerText = saveAmount;
    return saveAmount;
}

function totalCost() {
    const foodCost = getInput('food-cost');
    const rentCost = getInput('rent-cost');
    const clothesCost = getInput('clothes-cost');
    const totalExpenses = addValue(foodCost, rentCost, clothesCost);
    return totalExpenses;
}

// handle calculate
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeBalance = getInput('income-balance');

    // let errorMsgs = document.getElementById('error');
    // if (typeof incomeBalance.value != 'number' || incomeBalance < 0) {
    //     errorMsgs.style.display = 'block';
    //     errorMsgs.innerText = 'Provide a positive number in Income';
    // }
    // else if (typeof foodCost.value != 'number' || foodCost < 0) {
    //     errorMsgs.style.display = 'block';
    //     errorMsgs.innerText = 'Provide a positive number in Food';
    // }
    // else if (typeof rentCost.value != 'number' || rentCost < 0) {
    //     errorMsgs.style.display = 'block';
    //     errorMsgs.innerText = 'Provide a positive number in rent';
    // }
    // else if (typeof clothesCost.value != 'number' || clothesCost < 0) {
    //     errorMsgs.style.display = 'block';
    //     errorMsgs.innerText = 'Provide a positive number in clothes';
    // }
    // if (typeof foodCost != 'number' || typeof rentCost != 'number' || typeof clothesCost != 'number') {
    //     errorMsgs.style.display = 'block';
    //     errorMsgs.innerText = 'Provide a positive number in Income';
    // }
    const totalExpensesResult = totalCost();
    subtractValue(incomeBalance, totalExpensesResult, 'balance');
})

document.getElementById('save-button').addEventListener('click', function () {
    const incomeBalance = getInput('income-balance');
    const savePercent = getInput('save-input');
    const savingAmount = saveMoney(incomeBalance, savePercent);

    const totalExpensesResult = totalCost();
    const balance = subtractValue(incomeBalance, totalExpensesResult, 'balance');
    const remainingBalance = subtractValue(balance, savingAmount, 'remaining-balance');

})