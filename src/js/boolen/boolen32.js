import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '32',
    descriptions: `Даны  целые  числа  a,  b,  c,  являющиеся  сторонами  некоторого  тре-
угольника.  Проверить  истинность  высказывания:  «Треугольник  со  сторо-
нами a, b, c является прямоугольным `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')






task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value



    const check = Math.pow(A, 2) == Math.pow(B, 2) + Math.pow(C, 2) || Math.pow(B, 2) == Math.pow(A, 2) + Math.pow(C, 2) || Math.pow(C, 2) == Math.pow(B, 2) + Math.pow(A, 2)

    task.answer().innerHTML += `</br>` + 'Треугольник прямоугольный? ' + check

})