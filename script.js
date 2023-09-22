
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
            resetDisplay()
            console.log("resetDisplay() 1")
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
            resetDisplay()
            console.log("resetDisplay() 2")
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


const resetDisplay = () => {
    console.log(displaySum.innerHTML)

    if (displaySum.classList.contains("dspl-none")
        || inputNumberOne.value == "" || inputNumberTwo.value == "") {
        console.log("Banane", displaySum.classList.contains("dspl-none"))
        reset.classList.add("dspl-none")
    }
    else if (displaySum.classList.contains("dspl-none") === false
        && inputNumberOne.value != "" && inputNumberTwo.value != "") {
        console.log("Pomme", displaySum.classList.contains("dspl-none"))
        reset.classList.remove("dspl-none")
        reset.onclick = () => {
            console.log("remove", displaySum.classList.contains("dspl-none"))
        }
    }
}


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
                            displaySum.classList.remove("dspl-none")
                            additionOperation()
                            resetDisplay()
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
                            resetDisplay()
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
                            resetDisplay()
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
                            resetDisplay()
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

// resetDisplay()


