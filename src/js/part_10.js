let company = prompt('Какое официальное название javaScript?','');
if (company=='ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
    
}


let value = prompt('Введите число','');
if (value>'0') {
    alert('1');
    
} else if (value<0) {
    alert('-1');
    
} else {
    alert('0');
}

let message = (login=='Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' : '';