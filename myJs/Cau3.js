//tạo dãy Fibonacci đến số numberInt

let fibonacciArray = function (number) {
    if (number <= 2) {
         return [1];
    } else {
        let myArray = fibonacciArray(number - 1);
        myArray.push(myArray[myArray - 1] + myArray[myArray - 2]);
        return myArray;
    }
};
console.log(fibonacciArray(10));

//kiểm tra số đó có nằm trong dãy vừa tạo không
function isFibonacci(numberInt) {
    if (numberInt <= 1)
        return false;
    while (numberInt > 0) {
        if (numberInt===fibonacciArray(numberInt)){
            return true;
        }
        else
            return false;
        numberInt--;
    }
}
