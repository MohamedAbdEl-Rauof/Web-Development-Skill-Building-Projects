document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const historyList = document.getElementById("history-list");
    let currentOperand = "";
    let previousOperand = "";
    let operation = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.value;

            if (value) {
                switch (value) {
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                        chooseOperation(value);
                        break;
                    case "=":
                        calculate();
                        break;
                    case ".":
                        appendNumber(value);
                        break;
                    default:
                        appendNumber(value);
                }
                updateDisplay();
            } else if (button.id === "clear") {
                clear();
                updateDisplay();
            }
        });
    });

    function appendNumber(number) {
        if (number === "." && currentOperand.includes(".")) return;
        currentOperand = currentOperand.toString() + number.toString();
    }

    function chooseOperation(op) {
        if (currentOperand === "") return;
        if (previousOperand !== "") {
            calculate();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = "";
    }

    function calculate() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        addToHistory(`${previousOperand} ${operation} ${currentOperand} = ${computation}`);
        currentOperand = computation;
        operation = null;
        previousOperand = "";
    }

    function clear() {
        currentOperand = "";
        previousOperand = "";
        operation = null;
        display.innerText = "0";
    }

    function updateDisplay() {
        display.innerText = currentOperand || "0";
    }

    function addToHistory(entry) {
        const historyItem = document.createElement("li");
        historyItem.innerText = entry;
        historyList.appendChild(historyItem);
    }
});
