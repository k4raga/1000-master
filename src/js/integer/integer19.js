const id = document.querySelector('#integer19')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const N = Number(id.querySelector('.N').value)

    const minuts = Math.floor(N / 60)

    answ.innerHTML += '<br/>' + "Минут " + minuts + '<br/>'

})