let a, b, c = 0;
let total = 1000;

let found = false;

for(a = 1; a < total / 3; a++) {
    for(b = a; b < total / 2; b++) {
        c = total - a - b;
        if(Math.pow(a, 2) + Math.pow(b,2) === Math.pow(c, 2)) {
            found = true;
            break;
        }
    }
    if (found) break;
}

console.log(a * b * c);