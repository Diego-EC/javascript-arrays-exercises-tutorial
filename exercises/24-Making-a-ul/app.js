let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
    // your code here
    /*
    let arrColorFormatted = [];
    let strintColorFormatted = "";
    for (key in color) { 
        if (key == "label") {
            strintColorFormatted = "<li>" + color[key] + "</li>";
            return strintColorFormatted;
        }
    }
    */
   return "<li>" + color.label + "</li>";
}

function filterColors(color){
    // your code here
    /*
    let arrFilteredColors = [];
    for (key in color) {
        if (key == "sexy") {
            if (color[key] == true){
                return color;
            }
        }
    }
    */
    if(color.sexy === true){
        return color.label
    }
}

function generateHTMLFromArray(array){
	
    let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

