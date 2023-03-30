import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '15',
    descriptions: `Даны  три  целых  числа:  A,  B,  C.  Проверить  истинность  высказывания: «Ровно два из чисел A, B, C являются положительными».`

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value

    let check =
        ((A > 0) && (B > 0) && (C < 0))
        || ((A > 0) && (B < 0) && (C > 0))
        || ((A < 0) && (B > 0) && (C > 0))

    task.answer().innerHTML += `</br>` + 'Ровно два из чисел A, B, C являются положительными ' + check

})