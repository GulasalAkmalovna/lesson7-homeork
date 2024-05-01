function calculateMath () {
    let a = parseInt(Math.random() * 10 );
    let result = Math.pow(a, 2);
    let kub = Math.pow(a, 3);
    let lastResult = Math.pow(a, 2);
    document.write(`a:${a}  a^2= ${result} , a^3= ${kub} , a^4= ${lastResult}`)
}
calculateMath()