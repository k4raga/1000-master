import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '28',
    descriptions: ` Дан  номер  года  ( положительное  целое  число).  Определить  количество
                    дней в этом году, учитывая, что обычный год насчитывает 365 дней, а ви-
                    сокосный  —  366  дней.  Високосным  считается  год,  делящийся  на  4,  за  ис-
                    ключением тех годов, которые делятся на 100 и не делятся на 400 (напри-
                    мер, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — яв-
                    ляются).`

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)
    let vys = 'високосный'
    let neVys = 'не високосный'
    let check;

    if( (X % 100) == 0 && (X % 400) ==0){
        check = vys
    } else if ((X % 100) == 0 && (X % 400) !== 0){
        check = neVys
    } else if ((X%4)==0){
        check  = vys
    } else {
        check = neVys
    }
    task.answer().innerHTML += `</br>` + ' Год ' + check

})