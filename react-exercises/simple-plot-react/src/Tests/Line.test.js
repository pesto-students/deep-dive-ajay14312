import { Line } from '../components/Line/Line';

describe('Line', () => {
    describe('getYPixel', () => {
        it('should give correct value', () => {
            expect(() => getMaxYAxisValue({})).toThrow(TypeError);
        })
        it('should return max value', () => {
            expect(getMaxYAxisValue([{ X: 'Ind', Y: 200 }, { X: 'Aus', Y: 300 }])).toBe(310);
        })
    });
})