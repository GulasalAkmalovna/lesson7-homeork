function calculatePlus() {
    let a = parseInt(Math.random() *20);
    let b = parseInt(Math.random() *20);
    let result = a - b;
    document.write(` a=${a}, b=${b}, a-b=${result}`)
}
calculatePlus()