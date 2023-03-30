import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '3',
    descriptions: `Дано  целое  число.  Если  оно  является  положительным,  то  прибавить  к  не-
му 1;  если  отрицательным,  то  вычесть  из  него  2;  если  нулевым,  то  заме-
нить его на 10. Вывести полученное число.`

})

pastCard(task)
pastInput(task, 'A', 'A')





task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    let check;

    if (A > 0) {
        check = A + 1
    } else if (A == 0) {
        check = 10
    }   else {
        check = A - 2
    }

    task.answer().innerHTML += `</br>` + check


})