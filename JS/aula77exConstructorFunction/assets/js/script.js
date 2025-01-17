class Calculator {
    constructor() {
        this.display = document.querySelector('.display');

        this.start = () => {
            this.buttonClick();
            this.pressEnter();
        }

        this.buttonClick = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) this.btnToDisplay(el);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.deleteChar();
                if (el.classList.contains('btn-eq')) this.calculate();
            });
        }

        this.pressEnter = () => {
            document.addEventListener('keyup', (e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                    this.calculate();
                }
            });
        }

        this.btnToDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        }

        this.clearDisplay = () => {
            this.display.value = "";
        }

        this.deleteChar = () => {
            this.display.value = this.display.value.slice(0, -1);
        }

        this.calculate = () => {
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if (!calculation) {
                    alert("Invalid calculation!");
                    return;
                }

                this.display.value = String(calculation);
            } catch (error) {
                console.error(error);
                alert("An error occurred while trying to calculate :(");
                return;
            };
        }
    }
}

const calculator = new Calculator();
calculator.start();