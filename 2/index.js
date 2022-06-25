let fibonacci = [1,2];
let value = 0;
let i = 0;

while(value < 4_000_000) {
    value = fibonacci[i] + fibonacci[i + 1];
    fibonacci.push(value);
    i++;
}
fibonacci.pop();

fibonacci = fibonacci.filter((item) => item % 2 === 0);

let total = 0;

fibonacci.map((item) => total += item);

console.log(total);