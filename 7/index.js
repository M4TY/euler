let i = 12;
let primes = [2,3,5,7,11];

while(primes.length !== 10001) {
    let broke = false;

    for(let element of primes) {
        if(i % element === 0) {
            i++;
            broke = true;
            break;
        }
    }

    if(broke) continue;

    primes.push(i);
}

console.log(primes[primes.length - 1]);