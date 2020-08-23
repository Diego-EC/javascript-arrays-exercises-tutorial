// Code goes here
function matrixBuilder(parameter){
    let matrixArray = [];
    let matrixRow = [];
    for (let row = 0; row < parameter; row++) {
        for (let col = 0; col < parameter; col++) {
            matrixRow.push(1);
        }
        matrixArray.push(matrixRow);
        matrixRow = [];
    }
    return matrixArray;
}

// do not change anything from this line down
console.log(matrixBuilder(5))
