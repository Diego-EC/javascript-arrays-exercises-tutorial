

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
function myFunction(params) {
    return params * 3;
}

let newArray = myNumbers.map(myFunction);


console.log(newArray);

/*
var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	return (value * 9 / 5 + 32);
});

console.log(arrayOfFahrenheitValues);
*/