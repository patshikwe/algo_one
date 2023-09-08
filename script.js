
const operators = document.querySelectorAll(".container-operators input")
const operatorDisplay = document.querySelector(".operatorDisplay")
const additionOperator = document.querySelector("#addition")
const multiplicationOperator = document.querySelector("#multiplication")
const substractionOperator = document.querySelector("#substraction")
const divisionOperator = document.querySelector("#division")
const sum = document.querySelector(".box-two")
const addition = "+"
const multiplication = "x"
const substraction = "-"
const division = ":"

for (let i = 0; i < operators.length; i++) {

    operators[i].onclick = () => {
        const eltOperators = operators[i].value
        if (operators[i].checked === true) {
            operatorDisplay.innerHTML = eltOperators

            switch (eltOperators) {
                case addition:
                    console.log(eltOperators)
                    multiplicationOperator.checked = false
                    substractionOperator.checked = false
                    divisionOperator.checked = false
                    break;
                case multiplication:
                    console.log("x")
                    additionOperator.checked = false
                    substractionOperator.checked = false
                    divisionOperator.checked = false
                    break;
                case substraction:
                    console.log("-")
                    additionOperator.checked = false
                    multiplicationOperator.checked = false
                    divisionOperator.checked = false
                    break;
                case division:
                    console.log(":")
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
