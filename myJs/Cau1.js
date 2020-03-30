let studentPoint = [5, 6, 7, 8, 2, 4, 6, 3, 6, 9, 10];

function findMax(array) {
    let length = array.length;
    let maxPoint = array[0];
    for (let i = 0; i < length; i++) {
        if (array[i] > maxPoint) {
            maxPoint = array[i];
        }
    }
    console.log(maxPoint);
}

findMax(studentPoint);