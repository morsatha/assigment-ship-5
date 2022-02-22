//all id 
const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");
const save = document.getElementById("save");
const savingAccount = document.getElementById("savingAccount");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");
const remainingBalance = document.getElementById("remainingBalance");

function calculate() {
    let incomeBalance = parseFloat(income.value);
    let foodCost = parseFloat(food.value);
    let rentCost = parseFloat(rent.value);
    let clothCost = parseFloat(cloth.value);
    let totalCost = foodCost + rentCost + clothCost;

    errorCheck = errorHandle(incomeBalance, foodCost, rentCost, clothCost, totalCost);
    if (errorCheck == true) {
        //Calculate total Expenses Cost
        totalExpenses.innerText = totalCost;
        let balanceResult = incomeBalance - totalCost;
        balance.innerText = balanceResult;
    }
}


//clear input field
income.addEventListener("focus", () => {
    income.value = "";
    valueEmpty();
});
food.addEventListener("focus", () => {
    food.value = "";
    valueEmpty();
});
rent.addEventListener("focus", () => {
    rent.value = "";
    valueEmpty();
});
cloth.addEventListener("focus", () => {
    cloth.value = "";
    valueEmpty();
});
save.addEventListener("focus", () => {
    save.value = "";
    savingAccount.innerText = "0";
    remainingBalance.innerText = "0";
});

function valueEmpty() {
    totalExpenses.innerText = "0";
    balance.innerText = "0";
    savingAccount.innerText = "0";
    remainingBalance.innerText = "0";
}

//save & remaining calculations
function saveAmount() {
    let incomeBalance = parseFloat(income.value);
    let savePercentage = parseInt(save.value);
    let doubleBalance = parseFloat(balance.innerText);

    percentageResult = savePercentage / 100;
    result = incomeBalance * percentageResult;
    saveings = result;
    remainingTotalBalance = doubleBalance - saveings;

    errorCheck = saveError(doubleBalance, saveings, savePercentage);
    if (errorCheck == true) {
        savingAccount.innerText = saveings;
        remainingBalance.innerText = remainingTotalBalance;
    }
}



// error handler function
function errorHandle(incomeBalance, foodCost, rentCost, clothCost, totalCost) {
    if (incomeBalance < 0 || isNaN(incomeBalance)) {
        alert("Please Enter positive value");
        return false;
    } else if (foodCost < 0 || isNaN(foodCost)) {
        alert("Please Inter positive Value..!");
        return false;
    } else if (rentCost < 0 || isNaN(rentCost)) {
        alert("Please Inter positive Value..!");
        return false;
    } else if (clothCost < 0 || isNaN(clothCost)) {
        alert("Please Inter positive Value..!");
        return false;
    } else if (incomeBalance < totalCost) {
        alert("Sorry Insufficient Balance");
        return false;
    }
    return true;
}

// Save Ammout And remaing Ammout Error Handle Function
function saveError(doubleBalance, saveings, savePercentage) {
    //error Handle
    if (doubleBalance < saveings) {
        alert("Your balance not Enough to Save");
        return false;
    } else if (savePercentage < 0 || isNaN(savePercentage)) {
        alert("Please Enter Positive value ");
        return false;
    }
    return true;
}