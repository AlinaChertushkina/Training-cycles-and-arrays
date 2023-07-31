//Объявление пустого массива и заполнение его числами

let numbers = [];
for (i = -10; i <= 10; i++) {
    numbers.push(i);
}


//Удаление всех отрицательных чисел из массива

for (i = -10; i <= numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;
    }
}

//Возведение каждого числа в квадрат

numbers = numbers.map(number => number ** 2);


//Сортировка чисел в порядке убывания
numbers.sort((a, b) => b - a);

console.log(numbers);
