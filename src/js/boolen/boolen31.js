import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '31',
    descriptions: `Даны  целые  числа  a,  b,  c,  являющиеся  сторонами  некоторого  тре-
угольника.  Проверить  истинность  высказывания:  «Треугольник  со  сторо-
нами a, b, c является равнобедренным»   `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')






task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value



    const check = A == C && A == B || B == C && B == A || C == B && C == A

    task.answer().innerHTML += `</br>` + 'Треугольник равнобедренный? ' + check

})