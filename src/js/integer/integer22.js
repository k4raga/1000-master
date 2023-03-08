const id = document.querySelector('#integer22')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const N = Number(id.querySelector('.N').value)

    const minuts = Math.floor(N / 60)
    const hours = minuts % 60 * 60


    answ.innerHTML += '<br/>' + "Секунд с последнего часа " + hours + '<br/>'

})