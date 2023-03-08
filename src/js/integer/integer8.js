const id = document.querySelector('#integer8')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const num = Number(id.querySelector('.num').value)

    if (num < 9 || num > 99) {
        answ.innerHTML += "Некорректное число " + '<br/>'
    } else {
        const firstNumber = Math.floor(num / 10)
        const secondNumber = num % 10

        const perestanovka = firstNumber + secondNumber*10

        const proizv = firstNumber * secondNumber
        answ.innerHTML += "Перестановка " + perestanovka + '<br/>'
    }


})