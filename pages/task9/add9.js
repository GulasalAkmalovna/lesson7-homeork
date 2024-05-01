function arifmeticOperations() {
    let amal = prompt("Sonlar ustida qanday amalni bajarmoqchisiz?");
    let a = +prompt("a sonini kiriting");
    let b = +prompt("b sonini kiriting");

    switch (amal) {
        case "+":
            document.write(a + b)
            break;
        case "-":
            document.write(a - b)
            break;
        case "*":
            document.write(a * b)
            break;
        case "/":
            document.write(a / b)
            break;
        default:
            document.write("Amalni to'g'ri kiriting")
    }
}
arifmeticOperations()