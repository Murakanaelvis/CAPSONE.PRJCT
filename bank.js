let balance = 10000;  // Initial balance
const balanceDisplay = document.getElementById('balance');
const transactionList = document.getElementById('transactionList');
const timeDisplay = document.getElementById('timeDisplay');
const depositButton = document.getElementById('depositBtn');
const withdrawButton = document.getElementById('withdrawBtn');
const amountInput = document.getElementById('amount');

// Function to update the balance display
function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}

// Function to add a transaction to the table
function addTransaction(type, amount) {
    const time = new Date().toLocaleString();
    const transactionRow = document.createElement('tr');

    const typeCell = document.createElement('td');
    typeCell.textContent = type;
    transactionRow.appendChild(typeCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = `$${amount.toFixed(2)}`;
    transactionRow.appendChild(amountCell);

    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    transactionRow.appendChild(timeCell);

    transactionList.appendChild(transactionRow);
}

// Function to handle deposit
depositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }
    balance += amount;
    updateBalance();
    addTransaction('Deposit', amount);
    amountInput.value = '';  // Clear the input field
    updateTransactionTime();
});

// Function to handle withdrawal
withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    if (amount > balance) {
        alert('Insufficient funds!');
        return;
    }
    balance -= amount;
    updateBalance();
    addTransaction('Withdrawal', amount);
    amountInput.value = '';  // Clear the input field
    updateTransactionTime();
});

// Function to update the time display for the transaction
function updateTransactionTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.textContent = `Last transaction at: ${currentTime}`;
}

// Initial balance update
updateBalance();
