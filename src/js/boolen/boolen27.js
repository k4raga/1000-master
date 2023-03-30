import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '27',
    descriptions: `Даны числа x, y. Проверить истинность высказывания: «Точка с ко-
ординатами (x, y) лежит во второй или третьей координатной четверти».  `

})

pastCard(task)
pastInput(task, 'Y', 'Y')
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = task.ID().querySelector('.X').value
    const Y = task.ID().querySelector('.Y').value

    const check =  X < 0

    task.answer().innerHTML += `</br>` + 'Во второй или третьей координатной четверти ' + check

})