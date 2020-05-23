import { getMaxYAxisValue, drawAxis, drawGrids } from '../utils/Line.utils';

describe('Line utils', () => {
    describe('getMaxYAxisValue', () => {
        it('should throw error', () => {
            expect(() => getMaxYAxisValue({})).toThrow(TypeError);
        })
        it('should return max value', () => {
            expect(getMaxYAxisValue([{ X: 'Ind', Y: 200 }, { X: 'Aus', Y: 300 }])).toBe(310);
        })
    });
    describe('drawAxis', () => {
        it('should throw error', () => {
            expect(() => drawAxis({}, 10, 10)).toThrow(TypeError);
        });
        it('should throw error', () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            expect(() => drawAxis(ctx, '10', 10)).toThrow(TypeError);
            expect(() => drawAxis(ctx, 10, '10')).toThrow(TypeError);
        });
    });
    describe('drawGrids', () => {
        it('should throw error', () => {
            expect(() => drawGrids({})).toThrow(TypeError);
        });
    });
})