const id = document.querySelector('#integer3')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const kiloB = Number(id.querySelector('.bites').value)
    const tons = Math.floor(kiloB / 1024)
    answ.innerHTML += "Килобайтов " + tons + '<br/>'

})