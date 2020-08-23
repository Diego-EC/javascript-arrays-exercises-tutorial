var arr = [45,67,87,23,5,32,60];

//Your code here.
var flippedArr = [];
for(var i = arr.length - 1; i > -1; i--)
{
	flippedArr.push(arr[i]);
}
console.log(flippedArr);