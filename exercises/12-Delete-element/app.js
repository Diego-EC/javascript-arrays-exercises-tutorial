var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	//your code here
    let newPersons = [];
    people.forEach(element => {
        if (element != personName) {
            newPersons.push(element);
        }
    });

    return newPersons;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));