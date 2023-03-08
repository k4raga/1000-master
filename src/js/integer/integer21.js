const id = document.querySelector('#integer21')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const N = Number(id.querySelector('.N').value)

    const minuts = N % 60


    answ.innerHTML += '<br/>' + "Секунд с последней минуты " + minuts + '<br/>'

})