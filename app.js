const totalIncomeElement = document.getElementById('income-amount');
const totalExpensesElement = document.getElementById('expenses-amount');
const availableBalanceElement = document.getElementById('balance-amount');

const transactionDate = document.getElementById('transaction-date');
const transactionForm = document.getElementById('transaction-form');
const transactionType = document.getElementById('transaction-type');
const transactionAmount = document.getElementById('transaction-amount');
const transactionDescription = document.getElementById('transaction-description');

const transactionList = document.getElementById('transaction-list');


let totalIncome = 0;
let totalExpenses = 0;
let availableBalance = 0;


function updateBudgetSummary() {
  totalIncomeElement.textContent = `$${totalIncome.toFixed(2)}`;
  totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
  availableBalance = totalIncome - totalExpenses;
  availableBalanceElement.textContent = `$${availableBalance.toFixed(2)}`;
}


function addTransactionToList(type, amount, time, description) {
  const transactionItem = document.createElement('li');
  transactionItem.innerHTML = `<strong>${type}</strong>: $${amount.toFixed(2)} - ${description} - ${time}
  <button>Delete</button>`;
  transactionList.appendChild(transactionItem);
}


transactionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const time = transactionDate.value;
  const type = transactionType.value;
  const amount = parseFloat(transactionAmount.value);
  const description = transactionDescription.value;

  if (type === 'income') {
    totalIncome += amount;
  } else if (type === 'expense') {
    totalExpenses += amount;
  }

  updateBudgetSummary();
  addTransactionToList(type, amount,time, description);

  transactionDate.value = '';
  transactionAmount.value = '';
  transactionDescription.value = '';
});

