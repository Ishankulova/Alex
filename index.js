

let title = prompt("Имя скажи!").trim().toLowerCase()

if (title === 'alex') {


    let profile = +prompt("Быстро скажи ПИН-КОД")
    if(profile === 7777) {


        let cash = prompt("Сколько тебе нужно денег?")
        if(cash <=10000 && cash > 0) {
            alert('Норм всё!')
            alert(10000 - cash)
        } else {
            alert('Недостаточно пул э!')
        }


    } else {
        alert('Пользователь не найден,кан анакун!')
    }


} else {
    alert('Пользователь не найден,кан анакун!')
}








