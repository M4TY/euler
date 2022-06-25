const inputValue = 600851475143;

let dividors = [];

for(let i = 2; i < inputValue; i++) {
    if(inputValue % i === 0) dividors.push(i);
}

let prime = [];

for(let element of dividors) {
    let divisableCount = 0;
    for(let i = 2; i < element; i++) {
        if(element % i === 0) divisableCount++;
    }

    if(divisableCount === 0) {
        prime.push(element);
    }
}

console.log(prime);

//Slow asf lmao