import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '29',
    descriptions: `Даны числа x, y, x1, y1, x2, y2. Проверить истинность высказывания:
«Точка с координатами (x, y) лежит внутри прямоугольника, левая верхняя
вершина  которого  имеет  координаты  ( x1,  y1),  правая  нижняя  —  (x2,  y2),
а стороны параллельны координатным осям».  `

})

pastCard(task)
pastInput(task, 'Y2', 'Y2')
pastInput(task, 'Y1', 'Y1')
pastInput(task, 'Y', 'Y')
pastInput(task, 'X2', 'X2')
pastInput(task, 'X1', 'X1')
pastInput(task, 'X', 'X')





task.btn().addEventListener('click', (evt) => {

    const X = task.ID().querySelector('.X').value
    const X1 = task.ID().querySelector('.X1').value
    const X2 = task.ID().querySelector('.X2').value
    const Y = task.ID().querySelector('.Y').value
    const Y1 = task.ID().querySelector('.Y1').value
    const Y2 = task.ID().querySelector('.Y2').value


    const check = X1 > X && Y1 > Y && Y2 < Y && X2 < X

    task.answer().innerHTML += `</br>` + 'лежит на плоскости? ' + check

})