// Если а – четное посчитать а*б, иначе а+б
const getProductOrSum = (a, b) => {
    let result = 0;

    if ((!a && a != 0) || (!b && !b != 0)) {
        return result;
    }

    a % 2 ? result = a * b : result = a + b;

    return result;
}

// Определить какой четверти принадлежит точка с координатами (х, у)
const getQuarter = (x, y) => {
    let result = '';

    if (typeof x === 'undefined' || typeof y === 'undefined') {
        return result;
    } else if (!x && !y) {
        result = 'Frame origin';
    } else if (!y) {
        result = 'Y-axis';
    } else if (!x) {
        result = 'X-axis';
    } else if (x > 0 && y > 0) {
        result = '1st';
    } else if (x > 0 && y < 0) {
        result = '2nd';
    } else if (x < 0 && y < 0) {
        result = '3rd';
    } else if (x < 0 && y > 0) {
        result = '4th';
    }

    return result;
}

// Найти сумму только положительных из трех чисел
const getSumPositive = (a, b, c) => {
    let result = 0;

    if (a >= 0 && b >= 0 && c >= 0) {
        result = a + b + c;
    }

    return result;
}

// Посчитать выражение макс(а * б * с, а + б + с) + 3
const getMax = (a, b, c) => {
    let result = 0;
    let sum = a + b + c;
    let mult = a * b * c;

    if ((typeof a || typeof b || typeof c) === 'undefined') {
        return result;
    }

    sum >= mult ? result = sum + 3 : result = mult + 3; 

    return result;
}

// Написать программу определения оценки студента по его рейтингу
const getMark = rate => {
    let result = '';

    if (rate  < 0 || rate > 100) {
        return result;
    } else if (rate >= 0 && rate < 20) {
        result = 'F';
    } else if (rate < 40) {
        result = 'E';
    } else if (rate < 60) {
        result = 'D';
    } else if (rate < 75) {
        result = 'C';
    } else if (rate < 90) {
        result = 'B';
    } else if (rate <= 100) {
        result = 'A';
    }

    return result;
}

// Найти сумму четных чисел и диапазоне от 1 до 99
const getEvenSum = () => {
    let result = 0;
    
    for (let i = 0; i < 99; i++) {
        if (!(i % 2)) {
            result += i;
        }        
    }

    return result;
}

// Проверить простое ли число?
const getIsPrime = num => {
    if (typeof num === 'undefined') {
        return undefined;
    } else if (num < 0) {
        return false;
    }

    for (let i = 0; i < num / 2; i++) {
        if (num % i) {
            return false;
        }
    }

    return true;
}

// Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
const getFactorial = num => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;      
    }

    return result;
}

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321
const getMirrorNum = num => {
    let result = 0;
    let tempNum = num;
    let rem = 0;

    while (tempNum > 0) {
        rem = tempNum % 10;
        result += rem;
        tempNum = (tempNum - rem) / 10;
        tempNum && (result *= 10);
    }

    return result;
}

// Найти индекс минимального элемента массива
const getMinIndex = array => {
    let  mainIndex = 0;
    let min = 0;

    if (typeof array === 'undefined') {
        return undefined;        
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = array[i];
            mainIndex = i;            
        }
    }

    return mainIndex;
}

// Посчитать сумму элементов массива с нечетными индексами
const getOddSum = array => {
    let result = 0;

    if (typeof array === 'undefined') {
        return undefined;
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            result += array[i];
        }
    }

    return result;
}

// Сделать реверс массива (массив в обратном направлении)
const getRevArr = array => {
    let result = [];

    if (typeof array === 'undefined' || array === null) {
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        result[i] = array[(array.length - i) - 1];
    }

    return result;
}

// Поменять местами первую и вторую половину массива
const getHalfRev = array => {
    let result = [];

    if (typeof array === 'undefined' || array === null) {
        return undefined;
    }

    if (array.length % 2) {
        return 'Array length is negative'        
    }

    let arrCenter = array.length / 2;
    let arrFirstPart = [];
    let arrSecondPart = [];

    for (i = 0; i < array.length; i++) {
        if (arrCenter <= i) {
            arrFirstPart[i - arrCenter] = array[i];
        } else {
            arrSecondPart[i] = array[i];
        }
    }

    result = arrFirstPart.concat(arrSecondPart);

    return result;
}

// Получить строковое название дня недели по номеру дня
const getWeekDay = day => {
    let result = '';

    switch(day) {
        case 1:
            result = 'Понедельник';
          break;
        case 2:
            result = 'Вторник';
          break;
        case 3:
            result = 'Среда';
          break;
        case 4:
            result = 'Четверг';
          break;
        case 5:
            result = 'Пятница';
          break;
        case 6:
            result = 'Суббота';
          break;
        case 7:
            result = 'Воскресенье';
          break;
        default:
            result = 'Неправильное число';
      }
      
    return result;
}
