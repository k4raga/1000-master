import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '20',
    descriptions: ` На  числовой  оси  расположены  три  точки:  A,  B,  C.  Определить,  какая  из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.  `

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
    let distB = A - B;//2-12 = -10
    let distC = A - C;//3-12 = -9
    let dist;

    if (distB > distC) {

        check = B
        dist = Math.abs(distB)

     }  else {

        check = C
        dist = Math.abs(distC)

     }

    task.answer().innerHTML += `</br>` + ' ближе перпеменная  ' + check + ' расстояние ' + dist

})