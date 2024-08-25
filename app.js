function calc() {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');
    const equalBtn = document.querySelector('#equalBtn')

    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            if (button.innerText === 'AC') {
                display.value = '';
            } else if (button.innerText === 'DEL') {
                display.value = display.value.slice(0, -1)
            } else if (button.dataset.num !== undefined) {
                display.value += button.dataset.num
            } else if (button.innerText === '%') {
                let percentage = parseFloat(display.value) / 100;
                display.value = percentage;
            }
        })
    }

    equalBtn.addEventListener('click', function () {
        try {
            let result = new Function('return ' + display.value)();
            display.value = result;
        } catch (e) {
            display.value = "ERROR"
        }
    })

    const pinkBtns = document.querySelectorAll('.pinkBtns');
    const purpleBtns = document.querySelectorAll('.purpleBtns')

    let prevBtn = null;
    function colorButton() {
        for (let pinkBtn of pinkBtns) {
            pinkBtn.addEventListener('click', function () {
                pinkBtn.style.backgroundColor = '#ec8988';
                prevBtn = pinkBtn
            })
        }
        for (let purpleBtn of purpleBtns) {
            purpleBtn.addEventListener('click', function () {
                purpleBtn.style.backgroundColor = '#947fcf';
                purpleBtn.style.color = '#F8F7F9';
                prevBtn = purpleBtn
            })
        }

    }

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (prevBtn && prevBtn !== button) {
                prevBtn.style.backgroundColor = '';
                prevBtn.style.color = '';
            }
        })
    }

    colorButton()
}
calc()
