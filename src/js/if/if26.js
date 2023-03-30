import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '26',
    descriptions: ` Для данного вещественного x найти значение следующей функции f, при-
                    нимающей вещественные значения:  –x, если x ≤ 0,
                    f(x) = x2, если 0 < x < 2,  4, если x ≥ 2.
  `

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)

    let check;

    if (X <= 0 ) {
        check = -X
    }
    if ( 0 < X && X < 2 ){
        check = Math.pow(X, 2)
    }
    if (X >= 2) {
        check = 4 
    }
    task.answer().innerHTML += `</br>` + ' X ' + check

})