import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '10',
    descriptions: ` Даны  две  переменные  целого  типа:  A  и  B.  Если  их  значения  не  равны,  топрисвоить каждой переменной сумму этих значений, а если равны, то при-своить  переменным  нулевые  значения.  Вывести  новые  значения  перемен-
ных A и B.  `

})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    let bigger;
    let less;
    let sum;

    if (A == B) {
        bigger = 0
        less = 0
    } else {
        bigger = A + B
        less = A + B
    }


    task.answer().innerHTML += `</br>` + ' Переменная   А ' + bigger + ' Переменная B ' + less

})