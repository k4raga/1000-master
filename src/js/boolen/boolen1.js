import { Task, pastInput, pastCard } from './boolenConst.js'
{
    const task = new Task({
        num: '1',
        descriptions: `Дано  целое  число  A.  Проверить  истинность  высказывания:  «Число
                    A является положительным».`
    })

    pastCard(task)
    pastInput(task, 'A', 'A')

    console.log(document.querySelector('#boolen1'))

    const btn = document.querySelector('#boolen1 .button')
    console.log(document.querySelector('#boolen1 .button'))


console.log(btn)


btn.addEventListener('click', (evt) => {

    console.log('123')

})

}