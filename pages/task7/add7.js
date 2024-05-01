function incrementDicrement() {
    let num = +prompt("Enter a number")
    let a = ++num;
    let b = --num;
    document.write(`Increment = ${a} , Dicrement = ${b}`)
}
incrementDicrement()