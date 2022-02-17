// get input function
function getInput(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputText = inputValue.value;
    const inputNumber = parseFloat(inputText);
    return inputNumber;

}

function errorMessage(inputValue, errorId) {
    const errorMsgs = document.getElementById(errorId);
    if (isNaN(inputValue) == false) {
        errorMsgs.style.display = 'none';
        return inputValue;
    }
    else if (isNaN(inputValue.value) == true) {
        errorMsgs.style.display = 'block';
    }
}

// sum of all value
function addValue(firstNum, secondNum, thirdNum) {
    if (isNaN(firstNum) == false || isNaN(secondNum) == false || isNaN(thirdNum)) {
        const sum = firstNum + secondNum + thirdNum;
        return sum;
    }
}

// subtract value
function subtractValue(firstValue, secondValue, balanceId) {
    if (isNaN(firstValue) == false || isNaN(secondValue) == false) {
        const substract = firstValue - secondValue;
        document.getElementById(balanceId).innerText = substract;
        return substract;
    }
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
    errorMessage(foodCost, 'error-msgs1');
    errorMessage(rentCost, 'error-msgs1');
    errorMessage(clothesCost, 'error-msgs1');

    const totalExpenses = addValue(foodCost, rentCost, clothesCost);
    if (isNaN(totalExpenses) == false) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        return totalExpenses;
    }
}

// handle calculate
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeBalance = getInput('income-balance');
    errorMessage(incomeBalance, 'error-msgs1');

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
    if (isNaN(incomeBalance) == false) {
        const totalExpensesResult = totalCost();
        subtractValue(incomeBalance, totalExpensesResult, 'balance');
    }
})

document.getElementById('save-button').addEventListener('click', function () {
    const incomeBalance = getInput('income-balance');
    const savePercent = getInput('save-input');
    const savingAmount = saveMoney(incomeBalance, savePercent);

    const totalExpensesResult = totalCost();
    const balance = subtractValue(incomeBalance, totalExpensesResult, 'balance');
    const remainingBalance = subtractValue(balance, savingAmount, 'remaining-balance');

})