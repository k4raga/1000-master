import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '11',
    descriptions: ` Даны  две  переменные  целого  типа:  A  и  B.  Если  их  значения  не  равны,  то присвоить каждой переменной большее из этих значений, а если равны, то присвоить  переменным  нулевые  значения.  Вывести  новые  значения  переменных A и B.  `

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
        if(A>B) {
            bigger = A
            less = A
        } else {
            bigger = B
            less = B
        }

    }


    task.answer().innerHTML += `</br>` + ' Переменная   А ' + bigger + ' Переменная B ' + less

})