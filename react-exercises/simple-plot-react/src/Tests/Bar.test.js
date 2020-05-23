import { getMaxYAxisValue, drawAxis } from '../utils/Line.utils';

describe('Line utils', () => {
    describe('getMaxYAxisValue', () => {
        it('should throw error', () => {
            expect(() => getMaxYAxisValue({})).toThrow(TypeError);
        })
        it('should return max value', () => {
            expect(getMaxYAxisValue([{ X: 'Ind', Y: 200 }, { X: 'Aus', Y: 300 }])).toBe(310);
        })
    });
})