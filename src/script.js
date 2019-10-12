//Условные операторы

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