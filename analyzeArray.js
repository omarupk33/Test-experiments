export function analyzeArray(arr){
    function minimum(){
        return Math.min(...arr)
    }
    function maximum(){
        return Math.max(...arr)
    }

    function len(){
    return arr.length
    }

        function average(){
            let sum = 0
        for(num of arr){
            sum += num
        }
        return sum/arr.length
    }
    return {minimum, maximum, average, len}
}