import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '14',
    descriptions: ` Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.  `

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
    let bigger;

    if (A < B && A < C) {
        less = A
    }
    if (B < C && B < A) {
        less = B
    }
    if (C < B && C < B) {
        less = C
    }

    if (A > B && A > C) {
        bigger = A
    }
    if (B > C && B > A) {
        bigger = B
    }
    if (C > B && C > B) {
        bigger = C
    }

    task.answer().innerHTML += `</br>` + ' Меньшее ' + less + ' Большее ' + bigger

})