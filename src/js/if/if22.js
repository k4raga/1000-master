import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '22',
    descriptions: ` Даны  координаты  точки,  не  лежащей  на  координатных  осях  OX  и  OY.
                    Определить  номер  координатной  четверти,  в  которой  находится  данная
                    точка.   `

})

pastCard(task)

pastInput(task, 'Y', 'Y')
pastInput(task, 'X', 'X')


task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)
    const Y = Number(task.ID().querySelector('.Y').value)

    let check;

    if (X >= 0 && Y >= 0) {
        check = 1
    }
    if (X <= 0 && Y >= 0) {
        check = 2
    }
    if (X <= 0 && Y <= 0) {
        check = 3
    }
    if (X >= 0 && Y <= 0) {
        check = 4
    }

    task.answer().innerHTML += `</br>` + ' Координатная четверть  ' + check

})