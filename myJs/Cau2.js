function tryRemoveFromArray(array, numberInt) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] === numberInt) {
            array.splice(i, 1);
        }
    }
    console.log(array);
}

let testArray = [1, 4, 6, 7, 3, 7, 39];
tryRemoveFromArray(testArray, 7);