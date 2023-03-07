const id = document.querySelector('#integer4')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const A = Number(id.querySelector('.A').value)
    const B = Number(id.querySelector('.B').value)

    if (B > A) {
        answ.innerHTML += "B больше, чем A " + '<br/>'
    } else {
        const segment = Math.floor(A / B)
        answ.innerHTML += "Отрезков " + segment + '<br/>'
    }


})