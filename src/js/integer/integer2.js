const id = document.querySelector('#integer2')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const kilo = Number(id.querySelector('.kilo').value)
    const tons = Math.floor(kilo / 1000)
    answ.innerHTML += "Тонн: " + tons + '<br/>'

})