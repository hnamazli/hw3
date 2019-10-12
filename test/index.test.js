describe('getProductOrSum', () => {
    it('should be return 10 (5, 2)', () => {
        const a = 5;
        const b = 2;
        const expected = 10;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });

    it('should be return 6 (4, 2)', () => {
        const a = 4;
        const b = 2;
        const expected = 6;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (undefined, undefined)', () => {
        const a = undefined;
        const b = undefined;
        const expected = 0;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (NaN, 2)', () => {
        const a = NaN;
        const b = 2;
        const expected = 0;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });

    it('should be return 2 (0, 2)', () => {
        const a = 0;
        const b = 2;
        const expected = 2;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (2, 0)', () => {
        const a = 2;
        const b = 0;
        const expected = 0;

        const actual = getProductOrSum(a, b);

        assert.deepEqual(actual, expected);
    });
});

describe('getQuarter', () => {
    it('should be return 1st (2, 4)', () => {
        const x = 2;
        const y = 4;
        const expected = '1st';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return 2nd (2, -4)', () => {
        const x = 2;
        const y = -4;
        const expected = '2nd';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return 3rd (-2, -4)', () => {
        const x = -2;
        const y = -4;
        const expected = '3rd';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return 4th (-2, 4)', () => {
        const x = -2;
        const y = 4;
        const expected = '4th';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return X-axis (0, 4)', () => {
        const x = 0;
        const y = 4;
        const expected = 'X-axis';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return Y-axis (4, 0)', () => {
        const x = 4;
        const y = 0;
        const expected = 'Y-axis';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return Frame origin (0, 0)', () => {
        const x = 0;
        const y = 0;
        const expected = 'Frame origin';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (undefined, undefined)', () => {
        const x = undefined;
        const y = undefined;
        const expected = '';

        const actual = getQuarter(x, y);

        assert.deepEqual(actual, expected);
    });
});

describe('getSumPositive', () => {
    it('should be return 14 (5, 7, 2)', () => {
        const a = 5;
        const b = 7;
        const c = 2;
        const expected = 14;

        const actual = getSumPositive(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 9 (0, 7, 2)', () => {
        const a = 0;
        const b = 7;
        const c = 2;
        const expected = 9;

        const actual = getSumPositive(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 2 (0, 0, 2)', () => {
        const a = 0;
        const b = 0;
        const c = 2;
        const expected = 2;

        const actual = getSumPositive(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (undefined, undefined, undefined)', () => {
        const a = undefined;
        const b = undefined;
        const c = undefined;
        const expected = 0;

        const actual = getSumPositive(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (NaN, 5, 1)', () => {
        const a = NaN;
        const b = 5;
        const c = 1;
        const expected = 0;

        const actual = getSumPositive(a, b, c);

        assert.deepEqual(actual, expected);
    });
});

describe('getMax', () => {
    it('should be return 73 (5, 7, 2)', () => {
        const a = 5;
        const b = 7;
        const c = 2;
        const expected = 73;

        const actual = getMax(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 9 (1, 3, 2)', () => {
        const a = 1;
        const b = 3;
        const c = 2;
        const expected = 9;

        const actual = getMax(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 14 (0, 9, 2)', () => {
        const a = 0;
        const b = 9;
        const c = 2;
        const expected = 14;

        const actual = getMax(a, b, c);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (undefined, undefined, undefined)', () => {
        const a = undefined;
        const b = undefined;
        const c = undefined;
        const expected = 0;

        const actual = getMax(a, b, c);

        assert.deepEqual(actual, expected);
    });
});

describe('getMark', () => {
    it('should be return A (91)', () => {
        const rate = 91;
        const expected = 'A';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });

    it('should be return F (1)', () => {
        const rate = 1;
        const expected = 'F';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });

    it('should be return C (74)', () => {
        const rate = 74;
        const expected = 'C';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (-1)', () => {
        const rate = -1;
        const expected = '';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (101)', () => {
        const rate = 101;
        const expected = '';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });


    it('should be return empty line (undefined)', () => {
        const rate = undefined;
        const expected = '';

        const actual = getMark(rate);

        assert.deepEqual(actual, expected);
    });
});

describe('getEvenSum', () => {
    it('should be return 2450', () => {
        const expected = 2450;
        const actual = getEvenSum();

        assert.deepEqual(actual, expected);
    });
});

describe('getIsPrime', () => {
    it('should be return true (2)', () => {
        const num = 2;
        const expected = true;
        const actual = getIsPrime(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return true (3)', () => {
        const num = 3;
        const expected = true;
        const actual = getIsPrime(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return false (8)', () => {
        const num = 8;
        const expected = false;
        const actual = getIsPrime(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return false (-1)', () => {
        const num = -1;
        const expected = false;
        const actual = getIsPrime(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return undefined (undefined)', () => {
        const num = undefined;
        const expected = undefined;
        const actual = getIsPrime(num);

        assert.deepEqual(actual, expected);
    });
});

describe('getFactorial', () => {
    it('should be return 120 (5)', () => {
        const num = 5;
        const expected = 120;
        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 1 (0)', () => {
        const num = 0;
        const expected = 1;
        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 1 (-1)', () => {
        const num = -1;
        const expected = 1;
        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 1 (undefined)', () => {
        const num = undefined;
        const expected = 1;
        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });
});

describe('getMirrorNum', () => {
    it('should be return 865 (568)', () => {
        const num = 568;
        const expected = 865;
        const actual = getMirrorNum(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 65 (56)', () => {
        const num = 56;
        const expected = 65;
        const actual = getMirrorNum(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 5', () => {
        const num = 5;
        const expected = 5;
        const actual = getMirrorNum(num);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 (undefined)', () => {
        const num = undefined;
        const expected = 0;
        const actual = getMirrorNum(num);

        assert.deepEqual(actual, expected);
    });
});

describe('getMinIndex', () => {
    it('should be return 2 ([5, 9, 54, 2])', () => {
        const arr = [5, 9, 54, 2];
        const expected = 3;
        const actual = getMinIndex(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 ([5, 9, 7, 10])', () => {
        const arr = [5, 9, 7, 10];
        const expected = 0;
        const actual = getMinIndex(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const actual = getMinIndex(arr);

        assert.deepEqual(actual, expected);
    });
});

describe('getOddSum', () => {
    it('should be return 14 ([5, 9, 54, 2])', () => {
        const arr = [5, 9, 54, 2];
        const expected = 14;
        const actual = getOddSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return 0 ([8, 12, 54, 2])', () => {
        const arr = [8, 12, 54, 2];
        const expected = 0;
        const actual = getOddSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return 7 ([7, 12, 24, 2])', () => {
        const arr = [7, 12, 24, 2];
        const expected = 7;
        const actual = getOddSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return undefined (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const actual = getOddSum(arr);

        assert.deepEqual(actual, expected);
    });
});

describe('getRevArr', () => {
    it('should be return [3, 17, 80, 40, 15, 5] ([5, 15, 40, 80, 17, 3])', () => {
        const arr = [5, 15, 40, 80, 17, 3];
        const expected = [3, 17, 80, 40, 15, 5];
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return [3, 17] ([17, 3])', () => {
        const arr = [17, 3];
        const expected = [3, 17];
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return [17] ([17])', () => {
        const arr = [17];
        const expected = [17];
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty array ([])', () => {
        const arr = [];
        const expected = [];
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (null)', () => {
        const arr = null;
        const expected = undefined;
        const actual = getRevArr(arr);

        assert.deepEqual(actual, expected);
    });
});

describe('getHalfRev', () => {
    it('should be return [3, 4, 1, 2] ([1, 2, 3, 4])', () => {
        const arr = [1, 2, 3, 4];
        const expected = [3, 4, 1, 2];
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });

   it('should be return Array length is negative ([1, 2, 3, 4, 5])', () => {
        const arr = [1, 2, 3, 4, 5];
        const expected = 'Array length is negative';
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return Array length is negative ([17])', () => {
        const arr = [17];
        const expected = 'Array length is negative';
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty array ([])', () => {
        const arr = [];
        const expected = [];
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (undefined)', () => {
        const arr = undefined;
        const expected = undefined;
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return empty line (null)', () => {
        const arr = null;
        const expected = undefined;
        const actual = getHalfRev(arr);

        assert.deepEqual(actual, expected);
    });
});

describe('getWeekDay', () => {
    it('should be return Понедельник (1)', () => {
        const day = 1;
        const expected = 'Понедельник';
        const actual = getWeekDay(day);

        assert.deepEqual(actual, expected);
    });

    it('should be return Воскресенье (7)', () => {
        const day = 7;
        const expected = 'Воскресенье';
        const actual = getWeekDay(day);

        assert.deepEqual(actual, expected);
    });

    it('should be return Неправильное число (8)', () => {
        const day = 8;
        const expected = 'Неправильное число';
        const actual = getWeekDay(day);

        assert.deepEqual(actual, expected);
    });

    it('should be return Неправильное число (undefined)', () => {
        const day = undefined;
        const expected = 'Неправильное число';
        const actual = getWeekDay(day);

        assert.deepEqual(actual, expected);
    });
});