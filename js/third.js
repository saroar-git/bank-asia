//step 1.
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2.
    const withdrawField = document.getElementById('withdraw-field');
    const NewWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(NewWithdrawAmountString);

    //step 3.
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please insert a valid number');
        return;
    }

    //step 4.
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    //step 6.
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have less amount');
        return;
    }

    //step 5.
    const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentTotalWithdraw;

    //step 7.
    const newTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newTotalBalance;
})