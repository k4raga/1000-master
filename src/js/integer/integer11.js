const id = document.querySelector('#integer11')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const num = Number(id.querySelector('.num').value)

    if (num < 99 || num > 999) {
        answ.innerHTML += "Некорректное число " + '<br/>'
    } else {

        const firstNumber = Math.floor(num / 100)
        const secondNumber = Math.floor((num - firstNumber * 100) / 10)
        const lastNumber = num % 10

        const sum = firstNumber + secondNumber + lastNumber
        const pr = firstNumber*secondNumber*lastNumber

        answ.innerHTML += '<br/>' + "Сумма " + sum + '<br/>' + " Произведение " + pr + '<br/>' 

    }


})