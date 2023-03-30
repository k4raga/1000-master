import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '24',
    descriptions: ` Для данного вещественного x найти значение следующей функции f, при-
                    нимающей вещественные значения:   2·sin(x), если x > 0,  f(x) = 6 – x, если x ≤ 0   `

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)

    let check;

    if (X > 0){
        check = 2*Math.sin(X)
    } else {
        check = 6 - X
    }
        task.answer().innerHTML += `</br>` + ' X ' + check

})