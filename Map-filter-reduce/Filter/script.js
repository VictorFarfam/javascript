function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 50, 3, 6, 8, 55];

console.log (filtraPares(meuArray));