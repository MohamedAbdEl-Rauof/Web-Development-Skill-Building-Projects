document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalexpenses = document.getElementById('total-expenses');
    const expenseChartCtx  = document.getElementById('expense-chart');

    let expense = JSON.parse(localStorage.getItem('expenses')) || [];
    let expensechart;
    let editingExpenseId = null;

    form.addEventListener('submit' , (e) => {
        e.preventDefault();

        const expenseName = document.getElementById('expense-name');
        const expenseAmount = document.getElementById('expense-amount');
        const expenseDate = document.getElementById('expense-date');
        const expenseCategory = document.getElementById('expense-category');


        if(editingExpenseId){
            const expenseIndex = expense.findIndex(expense => expense.id === editingExpenseId);
            expense[expenseIndex] = {
                name:expenseName,
                amount:expenseAmount,
                date:expenseDate,
                category:expenseCategory,
                id:editingExpenseId,
            };
            editingExpenseId = null;
        }else{
            const expense = {
                name:expenseName,
                amount:expenseAmount,
                date:expenseDate,
                category:expenseCategory,
                id:editingExpenseId,
            };
            expense.push(expense);
        }

        updateUI();
        form.reset();

    });
    


});