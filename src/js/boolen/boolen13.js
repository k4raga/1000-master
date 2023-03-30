import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '13',
    descriptions: `Даны  три  целых  числа:  A,  B,  C.  Проверить  истинность  высказывания: «Хотя бы одно из чисел A, B, C положительное».`

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value
    let check = (A > 0) || (B > 0) || (C > 0)
    task.answer().innerHTML += `</br>` + 'Хотя бы одно из чисел A, B, C положительное ' + check

})
