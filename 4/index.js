function isPalindrome(n) {
    let reversed = "";
    let temp = n.toString();
    for(let i = temp.length - 1; i >= 0; i--) {
        reversed += temp[i];
    }


    return n.toString() === reversed;
}

let palindromes = [];

for(let i = 100; i < 1000; i++) {
    for(let z = 100; z < 1000; z++) {
        if(isPalindrome(z * i)) {
            palindromes.push(z*i);
        }
    }
}
palindromes = palindromes.sort((a,b)=> a-b);

console.log(palindromes[palindromes.length - 1]);