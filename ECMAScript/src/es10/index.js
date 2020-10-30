let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries))

let mySymbol =`My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)