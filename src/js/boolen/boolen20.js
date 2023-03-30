import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '20',
    descriptions: `Дано трехзначное число. Проверить истинность высказывания: «Все цифры данного числа различны». `

})

pastCard(task)
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value

    let firstNumb = Math.floor(A/100)
    let middleNumb = Math.floor((A / 10)) % 10
    let lastNumb = A % 10

    let check = firstNumb != middleNumb && firstNumb != lastNumb && lastNumb != middleNumb

    task.answer().innerHTML += `</br>` + 'Все цифры данного числа различны ' + check

})