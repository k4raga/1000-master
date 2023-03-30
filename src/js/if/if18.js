import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '18',
    descriptions: ` Даны  три  целых  числа,  одно  из  которых  отлично  от  двух  других,  равных
                    между  собой.  Определить  порядковый  номер  числа,  отличного  от  остальных.     `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')


task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)

    let check;

    if (A == B) {
        check = 3;
    }

    if (A == C){
        check = 2;
    }

    if (B == C) {
        check = 1;
    }

    task.answer().innerHTML += `</br>` + ' порядковый номер: ' + check

})