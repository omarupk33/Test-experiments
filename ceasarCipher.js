export function caesarCipher(str, shift){ // abc
    const letters = [
        "a", "b", "c", "d", "e", "f", "g","h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let tracker = letters [0]
    let decoded = ''

        for(c of str){
            for(let i = 0; i<letters.length;i++){
                if(c === letters[i]){
                if(i + shift >= letters.length){
                    tracker = letters[i + shift - letters.length]
                                 
                }
                else{tracker = letters[i+ shift]}
                break
                }
            }
        decoded += tracker
        }
        return decoded
    }
