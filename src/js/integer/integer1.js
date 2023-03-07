const id = document.querySelector('#integer1')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const sant = Number(id.querySelector('.sant').value)
    const meter = Math.floor(sant / 100)
    answ.textContent += "Метров: " + meter

})