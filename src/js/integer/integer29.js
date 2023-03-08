const id = document.querySelector('#integer29')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {
    const A = Number(id.querySelector('.A').value)
    const B = Number(id.querySelector('.B').value)
    const C = Number(id.querySelector('.C').value)

    const Spar = A * B
    const Skv = C * C
    const calcKv = Math.floor(Spar / Skv)
    const freePlace = Spar / Skv

    answ.innerHTML += '<br/>' + "Количество квадратов " + calcKv + '<br/>' + "Свободная площадь" + freePlace

})