import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: {
          val: function(){
            return 'check'
          }
        }
      },
    };

    const yourObj = deepCopyObject(myObj);

    myObj.subObj.key = 'new value';
    const arr = [1,2,3,4];
    const copyArr = deepCopyObject(arr);
    copyArr.splice(0,1);

    expect(myObj.subObj.key).toEqual('new value');
    expect(yourObj.subObj.key.val()).toEqual('check');
    expect(arr).toEqual([1,2,3,4]);
    expect(copyArr).toEqual([2,3,4]);
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
