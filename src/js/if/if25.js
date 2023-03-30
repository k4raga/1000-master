import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '25',
    descriptions: ` Для  данного  целого  x  найти  значение  следующей  функции  f,  принимаю-
                    щей значения целого типа:   2·x, если x < –2 или x > 2, f(x) =   –3·x, в противном случае.  `

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)

    let check;

    if (X < -2 || X > 2) {
        check = 2 * X
    } else {
        check = -3 * X
    }
    task.answer().innerHTML += `</br>` + ' X ' + check

})