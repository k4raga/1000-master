const id = document.querySelector('#integer28')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const K = Number(id.querySelector('.K').value)

    const days = (K + N -2 ) % (7 + 1)

    answ.innerHTML += '<br/>' + "Номер дня недели " + days

})