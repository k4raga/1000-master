const id = document.querySelector('#integer24')
const btn = id.querySelector('.button ')
const answ = id.querySelector('.answer')

btn.addEventListener("click", (evt) => {

    const K = Number(id.querySelector('.K').value)

    const days = K % 7

    answ.innerHTML += '<br/>' + "Номер дня недели " + days

    

})