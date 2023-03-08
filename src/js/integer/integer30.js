const id = document.querySelector('#integer30')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {
    const N = Number(id.querySelector('.N').value)

    const century = Math.floor(((N - 1) % 10000) / 1000) * 10 + Math.floor(((N - 1) % 1000) / 100) + 1;
    answ.innerHTML += '<br/>' + "Век " + century

})