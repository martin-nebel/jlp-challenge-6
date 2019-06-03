const myFilter = require('../src/myFilter');

//--------------------------------------------------------------------------------
// test('No function supplied', () => {
//    expect([1,2,3,4,5,6].myFilter(() => {})).toBe([1, 2, 3, 4, 5, 6]);
// });

// test('Only values < 5 returned', () => {
//    expect([1, 2, 3, 4, 5, 6].myFilter(function (element) { return element < 5 })).toBe([1, 2, 3, 4]);
// });

test('No function supplied 1', () => {
   expect(myFilter([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Null function supplied', () => {
   expect(myFilter([1, 2, 3, 4, 5, 6], () => {})).toEqual([]);
});

const numberIsLessThan5 = (aNumber) => { return aNumber < 5 };
test('Number is less than 5', () => {
   expect(myFilter([1, 2, 3, 4, 5, 6], numberIsLessThan5)).toEqual([1, 2, 3, 4]);
});

