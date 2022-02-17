// get input function
function getInput(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputText = inputValue.value;
    const inputNumber = parseFloat(inputText);
    return inputNumber;
}

// error message
function errorMessage(inputId, errorDiv, error) {
    const inputValue = getInput(inputId);
    const errorDivId = document.getElementById(errorDiv);
    const errorId = document.getElementById(error);
    if (isNaN(inputValue) == false) {
        errorDivId.style.display = 'none';
        return inputValue;
    }
    else if (isNaN(inputValue.value)) {
        errorDivId.style.display = 'block';
        errorId.innerText = '!!!!Please provide number'
        document.getElementById('total-expenses').innerText = 0;
        document.getElementById('balance').innerText = 0;
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('remaining-balance').innerText = 0;
    }
}

// sum of all value
function addValue(firstNum, secondNum, thirdNum) {
    if (typeof firstNum == 'number' && firstNum >= 0) {
        if (typeof secondNum == 'number' && secondNum >= 0) {
            if (typeof thirdNum == 'number' && thirdNum >= 0) {
                const sum = firstNum + secondNum + thirdNum;
                return sum;
            }
        }
    }
}

// subtract value
function subtractValue(firstValue, secondValue, balanceId) {
    if (typeof firstValue == 'number') {
        if (typeof secondValue == 'number') {
            const substract = firstValue - secondValue;
            document.getElementById(balanceId).innerText = substract;
            return substract;
        }
    }
}

// save money in percent
function saveMoney(income, saveValue) {
    const save = saveValue / 100;
    const saveAmount = income * save;
    return saveAmount;
}

// common function
function totalCost() {
    const foodCost = errorMessage('food-cost', 'error-div', 'error');
    const rentCost = errorMessage('rent-cost', 'error-div', 'error');
    const clothesCost = errorMessage('clothes-cost', 'error-div', 'error');
    const totalExpenses = addValue(foodCost, rentCost, clothesCost);
    return totalExpenses;
}

// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeBalance = errorMessage('income-balance', 'error-div', 'error');
    const totalExpensesResult = totalCost();
    if (incomeBalance > totalExpensesResult) {
        document.getElementById('total-expenses').innerText = totalExpensesResult;
        subtractValue(incomeBalance, totalExpensesResult, 'balance');
    }
    else if (incomeBalance < totalExpensesResult) {
        const errorDivId = document.getElementById('error-div');
        const errorId = document.getElementById('error');
        errorDivId.style.display = 'block';
        errorId.innerText = 'Provide amount lower than income';
        document.getElementById('total-expenses').innerText = 0;
        document.getElementById('balance').innerText = 0;
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('remaining-balance').innerText = 0;
    }
})

// handle save button
document.getElementById('save-button').addEventListener('click', function () {
    const incomeBalance = errorMessage('income-balance', 'error-div', 'error');
    const savePercent = errorMessage('save-input', 'error-div2', 'error2');
    const totalExpensesResult = totalCost();
    const balance = subtractValue(incomeBalance, totalExpensesResult, 'balance');
    const savingAmount = saveMoney(incomeBalance, savePercent);
    const errorDivId = document.getElementById('error-div2');
    const errorId = document.getElementById('error2');
    if (savingAmount < balance) {
        document.getElementById('saving-amount').innerText = savingAmount;
        const remainingBalance = subtractValue(balance, savingAmount, 'remaining-balance');
    }
    else if (savingAmount > balance) {
        errorDivId.style.display = 'block';
        errorId.innerText = 'Provide amount lower than balance';
        document.getElementById('total-expenses').innerText = 0;
        document.getElementById('balance').innerText = 0;
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('remaining-balance').innerText = 0;
    }

})