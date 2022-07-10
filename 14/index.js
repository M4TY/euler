function numberOfChains(startingNumber) {
    let currentNumber = startingNumber;

    let chain = [startingNumber];

    let stringForm = startingNumber + " => ";

    while(currentNumber !== 1) {
        if(currentNumber % 2 === 0) {
            currentNumber = currentNumber / 2;
            stringForm += `${currentNumber} => `;
            chain.push(currentNumber);
        } else {
            currentNumber = 3*currentNumber + 1;
            stringForm += `${currentNumber} => `;
            chain.push(currentNumber);
        }
    }
    return chain;
}

let largest = 0;
let la = [];
for(let i = 500_000; i < 1_000_000; i++) {
    let result = numberOfChains(i)
    if(result.length > largest) {
        largest = result.length;
        la = result;
    }
}
console.log(largest);
console.log(la[0]);