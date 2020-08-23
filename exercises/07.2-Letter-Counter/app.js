let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
par = par.replace(/ /g, '');
par = par.toLowerCase();
for (let index = 0; index < par.length; index++) {
    const element = par[index];
    if (counts[element]) {
        counts[element]++;
    }else{
        counts[element] = 1;
    }
}
console.log(counts);
