import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '23',
    descriptions: `Дано четырехзначное число. Проверить истинность высказывания: «Данное число читается одинаково слева направо и справа налево».  `

})

pastCard(task)
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value

    let firstNumb = Math.floor(A / 100)
    let middleNumb = Math.floor((A / 10)) % 10
    let lastNumb = A % 10

    let check = ( firstNumb == lastNumb)

    task.answer().innerHTML += `</br>` + 'Данное число читается одинаково слева направо и справа налево ' + check

})