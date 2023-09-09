
const operators = document.querySelectorAll(".container-operators input")
const operatorDisplay = document.querySelector(".operatorDisplay")
const additionOperator = document.querySelector("#addition")
const multiplicationOperator = document.querySelector("#multiplication")
const substractionOperator = document.querySelector("#substraction")
const divisionOperator = document.querySelector("#division")
const inputNumberOne = document.querySelector("#inputNumberOne")
const inputNumberTwo = document.querySelector("#inputNumberTwo")
const equal = document.querySelector(".equal")
const displaySum = document.querySelector(".box-two")
const reset = document.querySelector(".reset")
const addition = "+"
const multiplication = "x"
const substraction = "-"
const division = ":"

const additionOperation = () => {
    const sum = Number(inputNumberOne.value) + Number(inputNumberTwo.value)
    displaySum.innerHTML = sum
}

const multiplicationOperation = () => {
    const sum = inputNumberOne.value * inputNumberTwo.value
    displaySum.innerHTML = sum
}

const substractionOperation = () => { }
const divisionOperation = () => { }

const checkButtonAndSumDisplay = () => {

    inputNumberOne.addEventListener('change', () => {
        if (inputNumberOne.value == "") {
            equal.classList.add("dspl-none")
            displaySum.classList.add("dspl-none")
        }

        // Check button and sum display
        if (inputNumberOne.value != "" && inputNumberTwo.value != ""
            && operatorDisplay.innerHTML != "") {
            equal.classList.remove("dspl-none")
            displaySum.classList.remove("dspl-none")

            switch (operatorDisplay.innerHTML) {
                case addition:
                    additionOperation()
                    break;
                case multiplication:
                    multiplicationOperation()
                    break;
            }
        }
    })

    inputNumberTwo.addEventListener('change', () => {
        if (inputNumberTwo.value == "") {
            equal.classList.add("dspl-none")
            displaySum.classList.add("dspl-none")
        }

        // Check button and sum display
        if (inputNumberOne.value != "" && inputNumberTwo.value != ""
            && operatorDisplay.innerHTML != "") {
            equal.classList.remove("dspl-none")
            displaySum.classList.remove("dspl-none")

            switch (operatorDisplay.innerHTML) {
                case addition:
                    additionOperation()
                    break;
                case multiplication:
                    multiplicationOperation()
                    break;
            }
        }
    })
}
checkButtonAndSumDisplay();


for (let i = 0; i < operators.length; i++) {

    operators[i].onclick = () => {
        const eltOperators = operators[i].value
        if (operators[i].checked === true) {
            operatorDisplay.innerHTML = eltOperators

            switch (eltOperators) {
                case addition:
                    multiplicationOperator.checked = false
                    substractionOperator.checked = false
                    divisionOperator.checked = false

                    if (inputNumberOne.value != "" & inputNumberTwo.value != "") {
                        equal.classList.remove("dspl-none")
                        equal.onclick = () => {
                            additionOperation()
                        }
                    }
                    break;

                case multiplication:
                    additionOperator.checked = false
                    substractionOperator.checked = false
                    divisionOperator.checked = false

                    if (inputNumberOne.value != "" & inputNumberTwo.value != "") {
                        equal.classList.remove("dspl-none")
                        equal.onclick = () => {
                            multiplicationOperation()
                        }
                    }
                    break;

                case substraction:
                    additionOperator.checked = false
                    multiplicationOperator.checked = false
                    divisionOperator.checked = false

                    break;

                case division:
                    additionOperator.checked = false
                    multiplicationOperator.checked = false
                    substractionOperator.checked = false

                    break;
            }
        }
        else {
            operatorDisplay.innerHTML = ""
        }
    }
}


