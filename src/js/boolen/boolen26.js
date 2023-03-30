import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '26',
    descriptions: `Даны числа x, y. Проверить истинность высказывания: «Точка с ко-
ординатами (x, y) лежит в четвертой координатной четверти»  `

})

pastCard(task)
pastInput(task, 'Y', 'Y')
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = task.ID().querySelector('.X').value
    const Y = task.ID().querySelector('.Y').value

    const check = Y < 0 && X > 0

    task.answer().innerHTML += `</br>` + 'Во второй координатной четверти ' + check

})