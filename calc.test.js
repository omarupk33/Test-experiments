import { calculater } from "./calc";

test('calc', ()=>{
    expect(calculater().add(2,3)).toEqual(5)
    expect(calculater().sub(3,2)).toEqual(1)
    expect(calculater().multiply(2,3)).toEqual(6)
    expect(calculater().divide(3,3)).toEqual(1)
})