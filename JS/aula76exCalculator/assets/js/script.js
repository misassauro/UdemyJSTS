function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonClick();
            this.pressEnter();
        },
        buttonClick() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                console.log(el);

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteChar();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },
        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                    this.calculate();
                }
            })
        },
        btnToDisplay(value) {
            this.display.value += value;
        },
        clearDisplay() {
            this.display.value = "";
        },
        deleteChar() {
            this.display.value = this.display.value.slice(0, -1);
        },
        calculate() {
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
            }
        }
    }
}

const calculator = createCalculator();
calculator.start();