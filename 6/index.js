let sumOfSquares = 0;
let sum = 0;

for(let i = 1; i < 101; i++) {
    sumOfSquares += Math.pow(i,2);
    sum += i;
}

console.log(Math.pow(sum, 2) - sumOfSquares);