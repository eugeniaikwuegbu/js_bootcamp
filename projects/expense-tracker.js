const account = {
    name : 'Eugenia Ikwuegbu',
    expense: [],
    income: [],
    addExpense: function(description, amount){
        return this.expense.push(
            {description: description, 
            amount: amount
        })
    },
    addIncome : function (description, amount){
        return this.income.push({
            description,
            amount
        })
    },
    getAccountSummary : function(){
        let totalExpense = 0
        let totalIncome = 0

        this.expense.forEach(function(expense){
        return totalExpense += expense.amount 
        })

        this.income.forEach(function(income){
        return totalIncome += income.amount
        })
        
        let balance = totalIncome - totalExpense
        return `${this.name} has a balance of $${balance}: \n$${totalIncome} in income and $${totalExpense} in expenses`
    }
}
account.addIncome('side hustle', 3000)
account.addExpense('buy dog food', 200)
account.addExpense('buy cat food', 72)
console.log(account.income)
console.log(account.expense)
console.log(account.getAccountSummary())

