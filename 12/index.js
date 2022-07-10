let n = 1000000;
let start = new Date().getTime();
for(let i = 1000; i <= n; i++) {
    let tri = 0;
    for(let x = 1; x <= i; x++) {
        tri += x;
    }
    let divisors = [];
    for(let i = 1; i <= tri; i++) {
        if(tri % i === 0) divisors.push(i)
    }
    if(divisors.length > 500) {
        console.log(`${tri} has ${divisors.length}`);
        break;
    }
}
let end = new Date().getTime();
console.log(`Time taken: ${end - start}ms`);