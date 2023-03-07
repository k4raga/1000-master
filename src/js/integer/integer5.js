const id = document.querySelector('#integer5')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const A = Number(id.querySelector('.A').value)
    const B = Number(id.querySelector('.B').value)

    if (B > A) {
        answ.innerHTML += "B больше, чем A " + '<br/>'
    } else {
        const segment = A % B
        answ.innerHTML += "Незанятая часть " + segment + '<br/>'
    }


})