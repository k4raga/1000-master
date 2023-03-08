const id = document.querySelector('#integer23')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const N = Number(id.querySelector('.N').value)

    const hours = N % 360
    const fullMinuts = Math.floor(hours / 60)

    answ.innerHTML += '<br/>' + "Минут с последнего часа " + fullMinuts + '<br/>' + hours

})