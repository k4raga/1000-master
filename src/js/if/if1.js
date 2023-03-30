import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '1',
    descriptions: `Дано  целое  число.  Если  оно  является  положительным,  то  прибавить  к  не-
му 1; в противном случае не изменять его. Вывести полученное число.`

})

pastCard(task)
pastInput(task, 'A', 'A')





task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    let check;

    if(A > 0){
        check = A + 1
    }else {
        check = A
    }

    task.answer().innerHTML += `</br>`  + check


})