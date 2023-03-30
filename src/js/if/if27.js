import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '27',
    descriptions: ` Для  данного  вещественного  x  найти  значение  следующей  функции  f,
                    принимающей значения целого типа:   0, если x < 0,
                    f(x) =  1, если x принадлежит [0, 1), [2, 3), ...,   –1, если x принадлежит [1, 2), [3, 4), ... .
  `

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)

    let check;

    if (X < 0) {
        check = 0
    }
    if ((X % 2)==0) {
        check = 1
    }
    if ((X % 2)!==0) {
        check = -1
    }
    task.answer().innerHTML += `</br>` + ' X ' + check

})