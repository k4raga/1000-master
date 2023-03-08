const id = document.querySelector('#integer9')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const num = Number(id.querySelector('.num').value)

    if (num < 99 || num > 999) {
        answ.innerHTML += "Некорректное число " + '<br/>'
    } else {
        const firstNumber = Math.floor(num / 100)

        answ.innerHTML += "Первое число " + firstNumber + '<br/>'
    }


})