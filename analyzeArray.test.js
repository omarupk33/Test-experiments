import { analyzeArray } from "./analyzeArray"

test('average, min, max, length', ()=>{
    expect(analyzeArray([1,2,3]).minimum()).toEqual(1)
    expect(analyzeArray([1,2,3]).maximum()).toEqual(3)

    expect(analyzeArray([1,2,3]).average()).toEqual(2)
    expect(analyzeArray([1,2,3]).len()).toEqual(3)

})