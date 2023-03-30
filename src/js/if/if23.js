import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '23',
    descriptions: ` Даны  целочисленные  координаты  трех  вершин  прямоугольника,  стороны
                    которого параллельны координатным осям. Найти координаты его четвер-
                    той вершины.    `

})

pastCard(task)
pastInput(task, 'X3', 'X3')
pastInput(task, 'X2', 'X2')
pastInput(task, 'X1', 'X1')

pastInput(task, 'Y3', 'Y3')
pastInput(task, 'Y2', 'Y2')
pastInput(task, 'Y1', 'Y1')



task.btn().addEventListener('click', (evt) => {

    const X1 = Number(task.ID().querySelector('.X1').value)
    const X2 = Number(task.ID().querySelector('.X2').value)
    const X3 = Number(task.ID().querySelector('.X3').value)

    const Y1 = Number(task.ID().querySelector('.Y1').value)
    const Y2 = Number(task.ID().querySelector('.Y2').value)
    const Y3 = Number(task.ID().querySelector('.Y3').value)

    let check;
    let X4;
    let Y4;


    if (X1 == X2){
        X4 = X3
    }
    if (X1 == X3) {
        X4 = X2
    }
    if (X2 == X3) {
        X4 = X1
    }
    if(Y1 == Y2) {
        Y4 = Y3
    }
    if (Y1 == Y3) {
        Y4 = Y2
    }
    if (Y2 == Y3) {
        Y4 = Y1
    }

    task.answer().innerHTML += `</br>` + ' Координаты четвертой точки ' + X4 +' '+ Y4

})