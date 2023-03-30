import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '21',
    descriptions: ` Даны  целочисленные  координаты  точки  на  плоскости.  Если  точка  совпа-
                    дает с началом координат, то вывести 0. Если точка не совпадает с началом
                    координат, но лежит на оси OX или OY, то вывести соответственно 1 или 2.
                    Если точка не лежит на координатных осях, то вывести 3.  `

})

pastCard(task)

pastInput(task, 'Y', 'Y')
pastInput(task, 'X', 'X')


task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)
    const Y = Number(task.ID().querySelector('.Y').value)

    let check;
    if (X == 0 && Y == 0) {
        check = 0
    }
    if (X !== 0 && Y == 0) {
        check = 1
    }
    if (X == 0 && Y !== 0) {
        check = 2
    }
    if (X !== 0 && Y !== 0) {
        check = 3
    }

    task.answer().innerHTML += `</br>` + ' Вывод  ' + check

})