/* 
function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    var resp = n;
    while (n > 2) {
        resp *= --n;
    }
    return resp;
}

 */

const fatorialRecursivo = n => n == 0 ? 1 : n * fatorialRecursivo(n - 1);
console.log(fatorialRecursivo(3));