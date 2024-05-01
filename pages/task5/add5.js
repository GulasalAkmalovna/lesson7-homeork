function toq () {
  let num = +prompt("Enter a number");
  for(let i = 0; i < num; i++) {
if (i % 2 == 1) {
    document.write(i)
}
  } 
}
toq()