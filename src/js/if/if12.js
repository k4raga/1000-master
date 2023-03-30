import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '12',
    descriptions: ` Даны три числа. Найти наименьшее из них.  `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)
    let less;

    if (A < B && A < C) {
        less = A
    }
    if (B < A && B < C) {
        less = B
    }
    if (C < A && C < A) {
        less = C
    }

    task.answer().innerHTML += `</br>` + ' Меньшее ' + less

})