import { updateObject } from "./updateObject";

describe("updateObject", () => {
    it('should replace with new value', ()=> {
        expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a','_','c'])
    })
    it('should throw error if passed index is not a number type', ()=> {
        expect(()=> updateObject({}, '_', ['a', 'b', 'c'])).toThrow();
    })
    it('should throw error if index is more than array length', ()=> {
        expect(()=> updateObject(3, '_', ['a', 'b', 'c'])).toThrow();
    })
    it('should throw error if passed array is not an array type', ()=> {
        expect(()=> updateObject(3, '_', {})).toThrow();
    })
});
