import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '15',
    descriptions: ` Даны три числа. Найти сумму двух наибольших из них.   `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)
    let mid;
    let bigger;
    let sum;

    if (A > B && A > C) {
        bigger = A

        if (B > C) {
            mid = B
        } else {
            mid = C
        }

    } else {
        if (B > A && B > C) {
            bigger = B

            if (A > C) {
                mid = A
            } else {
                mid = C
            }

        } else {
            bigger = C
            if (A > C) {
                mid = A
            } else {
                mid = B
            }
        }
    }
    sum = bigger + mid

    task.answer().innerHTML += `</br>` + ' Сумма ' + sum

})