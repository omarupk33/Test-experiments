import { caesarCipher } from "./ceasarCipher";

test('CeasarCipher',()=>{
    expect(caesarCipher('xyza', 3)).toBe('abcd')}
)