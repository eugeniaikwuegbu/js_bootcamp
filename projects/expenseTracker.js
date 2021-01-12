//my Method

let myAccount = {
    name : 'Eugenia Ikwugebu',
    income : 0,
    expenses : 0,
}

let addIncome = function (account, incomeAmount, expenses){
    account.income +=  incomeAmount;
}

let addExpenses = function (account, expenses){
    account.expenses += expenses;
}

let getAccountSummary = function(account){
    let total = account.income - account.expenses;
    return `Account for ${account.name} has $${total}. $${account.income} in income. $${account.expenses} in expenses. `
}

let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
}

addIncome(myAccount, 2000);
addIncome(myAccount, 2000);
addExpenses(myAccount, 200)
addExpenses(myAccount, 200)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))