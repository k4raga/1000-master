import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '13',
    descriptions: ` Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим).  `

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

    if (A < B && A > C || A < C && A > B)  {
        less = A
    }
    if (B < A && B > C || B < C && B > A) {
        less = B
    }
    if (C < B && C > A || C < A && C > B) {
        less = C
    }

    task.answer().innerHTML += `</br>` + ' Меньшее ' + less

})