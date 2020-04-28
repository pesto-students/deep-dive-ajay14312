import { parseMs } from "./parseMs";

describe("parseMs", () => {
    it('should throw error',() => {
        expect(()=>parseMs('')).toThrow();
        expect(()=>parseMs(NaN)).toThrow();
        expect(()=>parseMs(null)).toThrow();
        expect(()=>parseMs(undefined)).toThrow();
        expect(()=>parseMs([])).toThrow();
        expect(()=>parseMs({})).toThrow();
    })
    it('should return an object', () => {
        expect(typeof parseMs(1337000001)).toBe('object');
    })
    it('should days match', () => {
        const parsedMs = parseMs(1337000001)
        expect(parsedMs.days).toBe(15);
    })
});
