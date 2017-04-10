/*
Обычно если мы хотим от посетителя получить число, то Infinity или NaN нам не подходят. 
Для того, чтобы отличить «обычные» числа от таких специальных значений, существует функция isFinite

Функция isFinite(n) преобразует аргумент к числу и возвращает true, 
если это не NaN/Infinity/-Infinity

alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false
*/