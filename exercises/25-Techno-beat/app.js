
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))


function lyricsGenerator(musicArray){
    let onesCounter = 0;
    let stringToReturn = "";
    musicArray.map((value) => {
        if (value == 1) {
            onesCounter += 1;

            stringToReturn += "Drop the base ";
            if (onesCounter >= 3) {
                onesCounter = 0;
                stringToReturn += "!!!Break the base!!! ";
            }
        }else{
            onesCounter = 0;
            stringToReturn += "Boom ";
        }
    });

    return stringToReturn;

}
/*
let myArray = theBools.map((value) => {
    if (value == 0) {
        return "woko";
    } else {
        return "wiki";
    }
});*/