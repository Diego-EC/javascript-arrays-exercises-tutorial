var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
	//your code here
    let mergedArray = [];
    firstArray.forEach(element => {
        mergedArray.push(element);
    });
    secondArray.forEach(element => {
        mergedArray.push(element);
    });

    return mergedArray;
}

console.log(mergeArrays(chunk_one, chunk_two));