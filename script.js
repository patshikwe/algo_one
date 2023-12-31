
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

const substractionOperation = () => {
    const sum = inputNumberOne.value - inputNumberTwo.value
    displaySum.innerHTML = sum
}

const divisionOperation = () => {
    const sum = inputNumberOne.value / inputNumberTwo.value
    displaySum.innerHTML = sum
}

const checkButtonAndSumDisplay = () => {

    inputNumberOne.addEventListener('change', () => {
        if (inputNumberOne.value == "") {
            equal.classList.add("dspl-none")
            displaySum.classList.add("dspl-none")
            resetButtonDisplay()
        }

        // Check button and sum display
        if (inputNumberOne.value != "" && inputNumberTwo.value != ""
            && operatorDisplay.innerHTML != "") {
            equal.classList.remove("dspl-none")
            displaySum.classList.remove("dspl-none")
            reset.classList.remove("dspl-none")


            switch (operatorDisplay.innerHTML) {
                case addition:
                    additionOperation()
                    break;
                case multiplication:
                    multiplicationOperation()
                    break;
                case substraction:
                    substractionOperation()
                    break;
                case division:
                    divisionOperation()
                    break;
            }
        }
    })

    inputNumberTwo.addEventListener('change', () => {
        if (inputNumberTwo.value == "") {
            equal.classList.add("dspl-none")
            displaySum.classList.add("dspl-none")
            resetButtonDisplay()
        }

        // Check button and sum display
        if (inputNumberOne.value != "" && inputNumberTwo.value != ""
            && operatorDisplay.innerHTML != "") {
            equal.classList.remove("dspl-none")
            displaySum.classList.remove("dspl-none")
            reset.classList.remove("dspl-none")

            switch (operatorDisplay.innerHTML) {
                case addition:
                    additionOperation()
                    break;
                case multiplication:
                    multiplicationOperation()
                    break;
                case substraction:
                    substractionOperation()
                    break;
                case division:
                    divisionOperation()
                    break;
            }
        }
    })
}
checkButtonAndSumDisplay();


const resetButtonDisplay = () => {

    if (displaySum.classList.contains("dspl-none")
        || inputNumberOne.value == "" || inputNumberTwo.value == "") {
        reset.classList.add("dspl-none")
    }
    else if (displaySum.classList.contains("dspl-none") === false
        && inputNumberOne.value != "" && inputNumberTwo.value != "") {
        reset.classList.remove("dspl-none")
    }
}


// Select Operator
for (let i = 0; i < operators.length; i++) {

    operators[i].onclick = () => {
        const eltOperator = operators[i].value
        if (operators[i].checked === true) {
            operatorDisplay.innerHTML = eltOperator

            switch (eltOperator) {
                case addition:
                    multiplicationOperator.checked = false
                    substractionOperator.checked = false
                    divisionOperator.checked = false

                    if (inputNumberOne.value != "" & inputNumberTwo.value != "") {
                        equal.classList.remove("dspl-none")

                        equal.onclick = () => {
                            displaySum.classList.remove("dspl-none")
                            additionOperation()
                            resetButtonDisplay()
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
                            displaySum.classList.remove("dspl-none")
                            multiplicationOperation()
                            resetButtonDisplay()
                        }
                    }
                    break;

                case substraction:
                    additionOperator.checked = false
                    multiplicationOperator.checked = false
                    divisionOperator.checked = false

                    if (inputNumberOne.value != "" & inputNumberTwo.value != "") {
                        equal.classList.remove("dspl-none")

                        equal.onclick = () => {
                            displaySum.classList.remove("dspl-none")
                            substractionOperation()
                            resetButtonDisplay()
                        }
                    }
                    break;

                case division:
                    additionOperator.checked = false
                    multiplicationOperator.checked = false
                    substractionOperator.checked = false

                    if (inputNumberOne.value != "" & inputNumberTwo.value != "") {
                        equal.classList.remove("dspl-none")

                        equal.onclick = () => {
                            displaySum.classList.remove("dspl-none")
                            divisionOperation()
                            resetButtonDisplay()
                        }
                    }
                    break;
            }
        }
        else {
            operatorDisplay.innerHTML = ""
        }
    }
}

// Reset display
reset.onclick = () => {
    inputNumberOne.value = ""
    inputNumberTwo.value = ""

    operatorDisplay.innerHTML = ""

    additionOperator.checked = false
    multiplicationOperator.checked = false
    substractionOperator.checked = false
    divisionOperator.checked = false

    displaySum.classList.add("dspl-none")
    equal.classList.add("dspl-none")
    reset.classList.add("dspl-none")
}

