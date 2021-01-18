
// while estruturas de repetição primeiro testa depois executa
var n = 10
var i = 0
/*while ( i  <= n) {
    i++
    console.log(`repeti : ${i}`)
}*/
// do while primeiro executa depois testa
do {
    i++
    console.log(`passo : ${i}`)
} while (i <= n);

console.log('final')