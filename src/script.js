const getSum = (a, b) => {
    let result = 0;

    a % 2 ? result = a + b : result = a * b;

    return result;
}

const getPos = (x, y) => {
    result = 0;

    if (x === 0 || y === 0) {
        result = 0;
    } else if (x > 0 && y > 0) {
        result = 1;
    } else if (x > 0 && y < 0) {
        result = 2;
    } else if (x < 0 && y < 0) {
        result = 3;
    } else {
        result = 4;
    }

    return result;
}