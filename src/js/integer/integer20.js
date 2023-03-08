const id = document.querySelector('#integer20')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const N = Number(id.querySelector('.N').value)

    const minuts = Math.floor(N / 60)
    const hours = Math.floor(minuts / 60)

    answ.innerHTML += '<br/>' + "Часов " + hours + '<br/>'

})