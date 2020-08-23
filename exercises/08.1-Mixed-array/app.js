var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let typeOfArray = [];
for (let index = 0; index < mix.length; index++) {
    typeOfArray.push(typeof mix[index]);
}
console.log(typeOfArray);