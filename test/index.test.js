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