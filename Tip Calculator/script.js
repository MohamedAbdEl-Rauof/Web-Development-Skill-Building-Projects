document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);

    
    document.getElementById('tip-amount').textContent = tipAmount;
});
