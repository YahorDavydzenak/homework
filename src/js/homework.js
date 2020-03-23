let number = prompt('Число?');

if (number>0) {
    alert(1);
    
} else if(number<0){
    alert(-1);
    
} else{
    alert(0);
}

let result = (a+b<4) ? 'Мало' : 'Много';
let login = prompt('Должность');
let message = (login == 'Сотрудник') ? alert('Привет') : (login == 'Директор') ? alert('Здравствуйте') : (login == '') ? alert('Нет логина') : '';
let browser =prompt('Браузер?')
if (browser == 'Edge') {
    alert( "You've got the Edge!" );
} else if(browser == 'Chrome',
    browser == 'Firefox',
    browser == 'Safari',
    browser == 'Opera') {
     alert( 'Okay we support these browsers too' );  
} else{
    alert( 'We hope that this page looks ok!' );
}
let counter = 10
while (counter >= 1){
    counter-=1;
    if (counter %2=== 0) {
        console.log(counter);
        
    } else {
        console.log(-counter);
        
    }
    
}



let counter = 10
while (counter >= 0){
    counter=-1;
    console.log(counter);
}
    
