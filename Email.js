let Odd = [];
let Even  = [];

for (let i=1 ; i<=100; i++){
    if (i % 2 === 0 ) {
    Even.push(i)
    } else {
    Odd.push(i)
    }
} 


console.log("Total Number of Odd User ID = "      + Odd);
console.log("Total Number of Even User ID = "      + Even);