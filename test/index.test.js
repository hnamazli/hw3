describe('Sum', () => {
    it('a = 5, b = 2', () => {
        assert .equal(getSum(5, 2), 7);
    });
})

describe('Coordinate position', () => {
    it('Return 1', () => {
        assert .equal(getPos(5, 2), 1);
    });

    it('Return 2', () => {
        assert .equal(getPos(5, -2), 2);
    });

    it('Return 3', () => {
        assert .equal(getPos(-5, -2), 3);
    });

    it('Return 4', () => {
        assert .equal(getPos(-5, 2), 4);
    });

    it('y = 0', () => {
        assert .equal(getPos(5, 0), 1);
    });

    it('Coordinate position is 0', () => {
        assert .equal(getPos(0, 0), 0);
    });
})