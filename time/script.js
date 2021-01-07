var time = +prompt('Уважаемый, какой сейчас час? 0-24');


if(time > 0 && time <= 3){
    alert('Воу, уже ночь');
}
if(time > 3 && time < 12) {
    alert('Неплохое утречко');
}
if(time >= 12 && time <= 17){
    alert('Уже обед');
}
if(time >= 18 && time < 24){
    alert('Вечер в хату');
}
if(time > 23.9 && time < 24.1){
    alert('Полночь?Класс');
}