import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '19',
    descriptions: ` Даны  четыре  целых  числа,  одно  из  которых  отлично  от  трех  других,  равных  между  собой.  Определить  порядковый  номер  числа,  отличного  от  остальных. `

})

pastCard(task)
pastInput(task, 'D', 'D')
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')


task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)
    const D = Number(task.ID().querySelector('.D').value)

    let check;

    if (A == B && A == C) {
        check = 4;
    }

    if (A == B && A == D) {
        check = 3;
    }

    if (A == C && A == D) {
        check = 2;
    }

    if (B == C && B == D) {
        check = 1;
    }

    task.answer().innerHTML += `</br>` + ' порядковый номер: ' + check

})