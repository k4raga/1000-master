const id = document.querySelector('#integer17')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const num = Number(id.querySelector('.num').value)

    if (num < 999) {
        answ.innerHTML += "Некорректное число " + '<br/>'
    } else {

        const firstNumber = Math.floor(num / 1000)
        const secondNumber = Math.floor((num - firstNumber * 100) / 10)
        const lastNumber = num % 10

        const sotnya = Math.floor((num % 1000)/ 100)

        answ.innerHTML += '<br/>' + "Сотни " + sotnya + '<br/>'

    }


})