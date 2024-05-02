function times() {
    let num = +prompt("Enter a number")
    for( let i = 0; i <= 10; i++){
        let result = num * i
       console.log(` ${num} * ${i} = ${result}`)
    }
}
times()